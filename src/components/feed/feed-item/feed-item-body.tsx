import { Grid } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { FeedItemBodyProps } from "@/types/props";
import DOMPurify from "isomorphic-dompurify";

export const FeedItemBody: FC<FeedItemBodyProps> = ({ body, image }) => {
  const sanitizedBody = DOMPurify.sanitize(body);
  return (
    <Grid container sx={{ justifyContent: "space-between", pt: 2 }}>
      <Grid size={image ? 6 : 12}>
        {body && (
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: sanitizedBody }}
          />
        )}
      </Grid>
      {image && (
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} size={6}>
          <Image
            src={image}
            alt="Post Image"
            width={500}
            height={0}
            layout="intrinsic"
            style={{ borderRadius: 10 }}
          />
        </Grid>
      )}
    </Grid>
  );
};
