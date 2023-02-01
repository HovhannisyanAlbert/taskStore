import React, { PropsWithChildren, memo } from "react";

import Image from "next/image";

type ImageProps = PropsWithChildren<{
  src: string;
  alt: string;
}>;

const ImageAdvertising: React.FC<ImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={180} height={140} />;
};

export default memo(ImageAdvertising);
