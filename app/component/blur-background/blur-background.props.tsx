interface BlurBackgroundProps {
  enable?: boolean;

  blurType?:
    | 'xlight'
    | 'light'
    | 'dark'
    | 'extraDark'
    | 'regular'
    | 'prominent';
}

export type { BlurBackgroundProps };
