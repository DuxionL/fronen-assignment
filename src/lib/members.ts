import { members, type Member } from "@/data/members";

export function getAllMembers(): Member[] {
  return members;
}

export function getMemberBySlug(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}

export function getAdjacentMembers(slug: string) {
  const i = members.findIndex((m) => m.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: members[(i - 1 + members.length) % members.length],
    next: members[(i + 1) % members.length],
  };
}
