import { technologies } from "@/data/techStack";

export default function stackMapper(icon: string) {
  return technologies.filter((technology) => {
    return technology.icon === icon;
  })[0].name;
}
