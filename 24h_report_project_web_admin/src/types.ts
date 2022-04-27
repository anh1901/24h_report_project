import { RaRecord, Identifier } from "react-admin";

export type ThemeName = "light" | "dark";

export interface Customer extends RaRecord {
  first_name: string;
  last_name: string;
  address: string;
  stateAbbr: string;
  city: string;
  zipcode: string;
  avatar: string;
  birthday: string;
  first_seen: string;
  last_seen: string;
  has_ordered: boolean;
  latest_purchase: string;
  has_newsletter: boolean;
  groups: string[];
  nb_commands: number;
  total_spent: number;
}
export type ReportStatus = "pending" | "solving" | "resolved" | "rejected";
export interface MediaItem {
  media_id: Identifier;
  name: string;
}
export interface TagItem {
  tag_id: Identifier;
  name: string;
}
export interface Report extends RaRecord {
  status: ReportStatus;
  basket: MediaItem[];
  date: Date;
  title: string;
  Tags: TagItem[];
  description: string;
}
