import { FeedItemDto } from "@/types/dto";
import { FeedItemType } from "@/types/enums";

export interface CompanyRegisterFormProps {
  companyName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  password: string;
  confirmPassword: string;
}

export interface PersonalRegisterFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  password: string;
  confirmPassword: string;
}

export interface CreateNewPasswordProps {
  password: string;
  confirmPassword: string;
}

export interface FeedItemProps {
  item: FeedItemDto;
}

export interface FeedItemHeaderProps {
  user: string;
  date: string;
  category: string;
  email: string;
  type: FeedItemType;
}

export interface FeedItemBodyProps {
  body: string;
  image: string;
}
