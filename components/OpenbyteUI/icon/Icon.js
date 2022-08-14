import React, { forwardRef } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

// Images
import arrow from "../../../public/icons/arrow.svg";

const SIZES = {
  BIG: "big",
  SMALL: "small",
};

const smallStyle = css`
  width: 5px;
  height: 8px;
`;

const bigStyle = css`
  width: 16px;
  height: 24px;
`;

const StyledIcon = styled(Image)``;

const Icon = forwardRef(({ icon, size }, ref) => {
  let iconSize;
  switch (size) {
    case SIZES.SMALL:
      iconSize = smallStyle;
      break;
    case SIZES.BIG:
      iconSize = bigStyle;
      break;
  }

  return (
    <div ref={ref}>
      <StyledIcon
        src={icon}
        css={`
          ${iconSize}
        `}
      />
    </div>
  );
});

Icon.propTypes = {
  icon: PropTypes.shape,
  size: PropTypes.oneOf(Object.values(SIZES)),
};

Icon.defaultProps = {
  icon: arrow,
  size: SIZES.SMALL,
};

Icon.displayName = "Icon";

export default Icon;
