export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
};

/** AI-generated commercials (Google Drive) */
export const aiVideos: PortfolioItem[] = [
  { id: "1RFMPGzUOGDzlq8-KmMcLjUo44eOnTMWE", title: "Dot & Key", category: "AI Product Commercial", duration: "0:28" },
  { id: "1YBnf_VWrkUgSAktrgTIzRA0FTsofWr-0", title: "Glow Repair", category: "Hair Serum", duration: "0:31" },
  { id: "1cYI2lMjt_29PASzSAmjN8PRl5Uzg29TF", title: "Nuve", category: "Moisturizer", duration: "0:22" },
  { id: "1ofF3DMqD5tRdEXFVkS3l50q5lor8bdhN", title: "Night Cream", category: "Skincare", duration: "0:26" },
  { id: "1qc8ckNl_D-xtpWpoH6QfI42uLViWgTF7", title: "Scrub", category: "Beauty", duration: "0:24" },
  { id: "17QikJMZ3j35xtgvEQEGKpzm6WiwujXG2", title: "Serum", category: "AI Product Demo", duration: "0:30" },
  { id: "1SF7ZvaBxfraxw4hEUYrMAtKx4E4iik4G", title: "Subha Oil", category: "AI Commercial", duration: "0:33" },
  { id: "1oApily6hJ6GXLCrhHrML4Gp3j5nurQ88", title: "Sunscreen", category: "AI Product Commercial", duration: "0:27" },
];

/** Creator-shot UGC (Google Drive) */
export const ugcVideos: PortfolioItem[] = [
  { id: "1VD2GvXyr3z9gEgNe37aujqxFA19Z3sf9", title: "Lionorca", category: "Product Review", duration: "0:39" },
  { id: "1dybP87QKWOr11kUf00uP5trgq0WmLRM_", title: "HMT", category: "Lifestyle", duration: "0:34" },
  { id: "1FoL-YU5vpgRcYKYxXXdVYdRKSWrIKssb", title: "MMP", category: "Talking Head", duration: "1:11" },
  { id: "1LJ-J7CUqV_gHV3BtrY8kBRwrwg5emgsV", title: "Sparrow", category: "Unboxing", duration: "0:45" },
  { id: "1P3Oh4mkTKlPxlBTf_RmW2DsPM7OJgqvk", title: "The Wise Parrot", category: "Creator Testimonial", duration: "0:52" },
];

export const navLinks = [
  { label: "AI Videos", href: "#ai-videos" },
  { label: "UGC Videos", href: "#ugc-videos" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const CONSULT_URL = "#contact";
