import { Link } from "@chakra-ui/next-js";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ICreator, IProject } from "public/catalog/loader";

export function ProjectCard(props: {
  creator: ICreator;
  project: IProject;
  condensed?: boolean;
}) {
  return (
    <>
      <Card
        maxW="sm"
        borderRadius="lg"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <CardBody p="0" borderRadius="lg" display="flex" flexDirection="column">
          <Box
            position="relative"
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
            overflow="hidden"
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%) center center / cover no-repeat, url(${props.project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                "&:after": {
                  backdropFilter: "blur(100px)",
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                },
              }}
            />

            {props.project.image && (
              <Link
                href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}`}
              >
                <AspectRatio ratio={630 / 500}>
                  <Image
                    src={props.project.image}
                    alt={props.project.data?.name || ""}
                    objectFit="cover"
                    objectPosition="center"
                    borderBottom="1px"
                    borderColor="gray.200"
                    position="relative"
                    margin="0px auto"
                    display="block"
                  />
                </AspectRatio>
              </Link>
            )}
          </Box>

          <Stack my="4" spacing="3" px="4" display="flex" flex="1 0 auto">
            <Heading
              size="sm"
              variant="link"
              as={Link}
              textAlign="left"
              href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}`}
            >
              {props.project.data?.name}
            </Heading>
            {!props.condensed && (
              <Text
                textAlign="left"
                noOfLines={2}
                title={props.project.data?.description}
              >
                {props.project.data?.description}
              </Text>
            )}
            {!props.condensed && (
              <Box marginTop="auto !important" textAlign="left">
                <Divider marginTop="4" marginBottom="4" />
                <Button
                  as={Link}
                  _hover={{ textDecoration: "none" }}
                  href={`/creators/${props.creator.creatorSlug}`}
                  variant="link"
                >
                  By {props.creator.data?.name}
                </Button>
              </Box>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
