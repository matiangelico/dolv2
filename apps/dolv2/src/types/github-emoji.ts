interface GithubEmojiType {
  name: string;
  url: string;
  file: string;
  path: string;
  string: string | null;
}

declare type GithubEmojisType = Map<string, GithubEmojiType>;

export type { GithubEmojiType, GithubEmojisType };
