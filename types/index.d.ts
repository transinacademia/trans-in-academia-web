interface EventLink {
  label: string;
  url: string;
}

interface TiAEventFrontmatter {
  title: string;
  image: string;
  time: string;
  past: boolean;
  lang?: string[];
  links?: EventLink[];
}

interface EventData extends TiAEventFrontmatter {
  content: string;
}

interface TiAEvents {
  [id: string]: EventData;
}

interface TiAEventCard extends EventData {
  id: string;
  showFullText: boolean;
  showMoreButtonVisible: boolean;
}
