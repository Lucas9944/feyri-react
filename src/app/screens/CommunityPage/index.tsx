import React, { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Tabs,
  Tab,
  Typography,
  Pagination,
  IconButton,
} from "@mui/material";
import { CalendarMonth, VisibilityOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import "../../../css/community.css";

const FEYRI_PINK = "#f48fb1";

type Category = "all" | "market" | "review" | "stories";

type Article = {
  id: string;
  category: Exclude<Category, "all">;
  title: string;
  excerpt: string;
  authorName: string;
  authorAvatar?: string; // optional
  date: string; // "22.10.2023"
  views: number;
  likes: number;
  cover: string; // image path
  to: string; // route
};

const TABS: { key: Category; label: string }[] = [
  { key: "all", label: "All Articles" },
  { key: "market", label: "Market evaluation" },
  { key: "review", label: "Product review" },
  { key: "stories", label: "Stories" },
];

export function CommunityPage() {
  const [tab, setTab] = useState<Category>("all");
  const [page, setPage] = useState(1);

  // Siz aytgandek: fresh1.JPG ~ fresh4.JPG
  // Ularni public/community/ ichiga qo‘ying:
  // public/community/fresh1.JPG ...
  const articles: Article[] = useMemo(
    () => [
      {
        id: "1",
        category: "market",
        title: "Baby Must Haves You Need For A Newborn",
        excerpt:
          "Suspendisse fermentum ante eu libero molestie aliquam. Pellentesque ut diam condimentum, pellentesque ante imperdiet, ultricies dui.",
        authorName: "Jacob Robertson",
        authorAvatar: "/icons/default_user.svg",
        date: "22.10.2023",
        views: 15,
        likes: 8,
        cover: "/latest/fresh3.JPG",
        to: "/community/1",
      },
      {
        id: "2",
        category: "review",
        title: "A Minimal Routine That Actually Works",
        excerpt:
          "Praesent eu lectus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        authorName: "Jacob Robertson",
        authorAvatar: "/icons/default_user.svg",
        date: "22.10.2023",
        views: 21,
        likes: 11,
        cover: "/latest/fresh2.JPG",
        to: "/community/2",
      },
      {
        id: "3",
        category: "stories",
        title: "Behind the Scenes: Feyri Picks",
        excerpt:
          "Donec non justo vitae elit iaculis malesuada. Integer vitae ipsum sed neque consequat bibendum.",
        authorName: "Jacob Robertson",
        authorAvatar: "/icons/default_user.svg",
        date: "22.10.2023",
        views: 9,
        likes: 3,
        cover: "/latest/fresh1.JPG",
        to: "/community/3",
      },
      {
        id: "4",
        category: "market",
        title: "Market Trends You Should Watch",
        excerpt:
          "Morbi laoreet, justo nec consequat posuere, metus turpis posuere elit, in sagittis lectus velit non sem.",
        authorName: "Jacob Robertson",
        authorAvatar: "/icons/default_user.svg",
        date: "22.10.2023",
        views: 32,
        likes: 14,
        cover: "/latest/fresh4.JPG",
        to: "/community/4",
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const list = tab === "all" ? articles : articles.filter((a) => a.category === tab);
    return list;
  }, [articles, tab]);

  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageSafe = Math.min(page, pageCount);
  const paged = filtered.slice((pageSafe - 1) * pageSize, pageSafe * pageSize);

  const onTabChange = (_e: React.SyntheticEvent, v: Category) => {
    setTab(v);
    setPage(1);
  };

  return (
    <Box className="community_page">
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={3}>
          {/* Header */}

          {/* Tabs */}
          <Box className="community_tabsWrap">
  <Tabs
    value={tab}
    onChange={onTabChange}
    centered
    variant="standard"
    TabIndicatorProps={{ style: { backgroundColor: "#f48fb1", height: 3, borderRadius: 3 } }}
    sx={{
      minHeight: 46,
      "& .MuiTabs-flexContainer": { gap: 26 },
      "& .MuiTab-root": {
        minHeight: 46,
        textTransform: "none",
        fontWeight: 700,
        fontSize: 14,
        color: "#2a2a2a",
        padding: "10px 6px",
      },
      "& .MuiTab-root:hover": {
        color: "#f48fb1",
        backgroundColor: "transparent",
      },
      "& .Mui-selected": { color: "#f48fb1" },
    }}
  >
    {TABS.map((t) => (
      <Tab key={t.key} value={t.key} label={t.label} disableRipple />
    ))}
  </Tabs>
</Box>


          {/* Grid */}
          <Box className="community_grid">
            {paged.map((a) => (
              <Box key={a.id} className="community_card">
                {/* Cover */}
                <Box
                  component="img"
                  src={a.cover}
                  alt={a.title}
                  className="community_cover"
                  onError={(e: any) => {
                    e.currentTarget.src = "/icons/swiper3.jpeg"; // fallback (agar bor bo‘lsa)
                  }}
                />

                <Box className="community_cardBody">
                  {/* Author row */}
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Avatar
                        src={a.authorAvatar}
                        sx={{ width: 28, height: 28, bgcolor: "#eee", color: "#555", fontSize: 12 }}
                      >
                        {a.authorName?.[0] ?? "U"}
                      </Avatar>
                      <Typography sx={{ fontWeight: 700, fontSize: 13, color: "#2a2a2a" }}>
                        {a.authorName}
                      </Typography>
                    </Stack>

                    <Box className="community_badge">{badgeLabel(a.category)}</Box>
                  </Stack>

                  {/* Title */}
                  <Typography className="community_title">{a.title}</Typography>

                  {/* Meta */}
                  <Stack direction="row" alignItems="center" spacing={2} className="community_meta">
                    <MetaItem icon={<CalendarMonth sx={{ fontSize: 18 }} />} text={a.date} />
                    <MetaItem icon={<VisibilityOutlined sx={{ fontSize: 18 }} />} text={`${a.views}`} />
                    <MetaItem icon={<ThumbUpAltOutlined sx={{ fontSize: 18 }} />} text={`${a.likes}`} />
                  </Stack>

                  {/* Excerpt */}
                  <Typography className="community_excerpt">{a.excerpt}</Typography>

                  {/* CTA */}
                  <Box sx={{ mt: 1 }}>
                    <NavLink to={a.to} className="community_readMore">
                      Read more
                    </NavLink>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Pagination */}
          <Stack alignItems="center" sx={{ pt: 1 }}>
            <Pagination
              count={pageCount}
              page={pageSafe}
              onChange={(_, p) => setPage(p)}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  borderRadius: 2,
                  fontWeight: 700,
                },
                "& .Mui-selected": {
                  color: FEYRI_PINK,
                  bgcolor: "transparent",
                  border: `1px solid ${FEYRI_PINK}`,
                },
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function MetaItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <Stack direction="row" alignItems="center" spacing={0.8} sx={{ color: "#6b6b6b" }}>
      <Box sx={{ color: "#f48fb1", display: "flex", alignItems: "center" }}>{icon}</Box>
      <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{text}</Typography>
    </Stack>
  );
}

function badgeLabel(c: Exclude<Category, "all">) {
  if (c === "market") return "Market";
  if (c === "review") return "Review";
  return "Story";
}
