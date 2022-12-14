import { useEffect, useRef, useState } from "react";
import { useEvent } from "./useEvent";

/**
 * Function that executes a promise and syncs its result, loading and error values in a React state.
 *
 * @param mutation Function to execute for which the data, error and loading state will be saved in a React state. Must return a Promise.
 * @param params (Optional) Object for which the values will be watched in a `useEffect` to execute the mutation automatically when the values change.
 * @returns
 */
export function useQuery<
  TData,
  TParams extends Record<string, unknown> | undefined
>(
  mutation: ((params: TParams) => Promise<TData>) | (() => Promise<TData>),
  params?: TParams
) {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>();
  const [data, setData] = useState<TData | null>();
  const countRef = useRef(0);

  const paramValues = Object.values(params ?? {});

  const exec = useEvent(async (params: TParams): Promise<TData> => {
    setLoading(true);
    setError(null);
    const requestCount = ++countRef.current;

    try {
      const data = await mutation(params);
      if (requestCount === countRef.current) {
        setData(data);
        setLoading(false);
        setLoaded(true);
      }
      return data;
    } catch (error) {
      if (requestCount === countRef.current) {
        setError(error);
      }
      console.error({ error, message: "Error during mutation" });
      throw error;
    } finally {
      if (requestCount === countRef.current) {
        setLoading(false);
      }
    }
  });

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    if (params) {
      exec(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, paramValues);

  return {
    exec: exec as (params?: TParams) => Promise<TData>,
    clearError: clearError,
    loading,
    loaded,
    error,
    data,
  } as const;
}
