const CertIcon = () => {
  return (
    <svg
      width="143"
      height="143"
      viewBox="0 0 143 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1931_445)">
        <rect x="4" y="3" width="135" height="135" rx="8" fill="white" />
        <rect
          x="4"
          y="3"
          width="135"
          height="135"
          rx="8"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1931_445"
          x="0"
          y="0"
          width="143"
          height="143"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0685807 0 0 0 0 0.120472 0 0 0 0 0.304451 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1931_445"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1931_445"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use

            transform="translate(0.207407 0.0797872) scale(0.000778172)"
          />
        </pattern>
        <image
          id="image0_1931_445"
          width="752"
          height="1080"
        />
      </defs>
    </svg>
  );
};

export default CertIcon;
