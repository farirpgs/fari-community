"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button
        onClick={() => {
          reset();
          router.refresh();
        }}
      >
        Reload
      </button>
    </div>
  );
}

{
  /* <Page
          title="Something went wrong"
          description="An error has occurred. Please try again later."
          container={{
            maxWidth: "md",
          }}
          box={{ mt: "2rem" }}
        >
          <Typography variant="h2" gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant="body1">
            An error has occurred. Please try again later.
          </Typography>
        </Page> */
}
