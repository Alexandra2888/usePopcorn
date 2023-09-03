export interface StarRatingProps {
    maxRating?: number;
    color?: string;
    size?: number;
    className?: string;
    messages?: string[];
    defaultRating?: number;
    onSetRating: (rating: number) => void;
  }