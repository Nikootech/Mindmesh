import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  fetchPriority,
  loading,
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      fetchpriority={fetchPriority}
      loading={loading}
      width={props.width}
      height={props.height}
      onError={(e) => {
        e.target.src = "/assets/images/no_image.png"
      }}
      {...props}
    />
  );
}

export default Image;
