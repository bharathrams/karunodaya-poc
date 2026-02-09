
import { ChildProfile, Book, ReadingOrder } from './types';

export const AVATAR_URLS = {
  RUSTY: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3OGWiy8uJbkMy_yYtCKBt1LwT_SR7YnAPC-bAaZmFM-ptcq5p7bXHd9DxTSaf_UaQD5Zmm6C6UT1SRfae5sW6UqPemgYg67rzL7scYI0mXGmm62Tsep4m9BJOK5L-y2yW-d0__yxVNMGcmenAEXZsI0F7_OsRInl0vQ4IeJzwmEtTQdrYtLM_vyIgoyU_-RqzBJBuZTCJTpJxHWwKvP1fh8K_gBr1pCZSSW7WPRm4CZtI3ccMon_C0MqT9UUAAhgQocEP4n_PJgiy',
  BAMBOO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEukpbahMU_TYH4pgoBpk9yS9syyY8TejlJ7VAFwYTD-yHT1WgHyji6b3QmiVBPah2vookyQ_VOMOS7URb5zUkHwHN_tj3X2EbbrMa7Xxh0PLlkJkYz0Y-vrTSaaHfwbwkgeAfKDiSFWRLvW7LqcUrp9dzg07EgNN0u_AS7Lz1y4-gSlnhz5vkjKklD_0fTX2KePkg4kXJQYnU3fyUazSTMHorDxf-QnQqQ_T-1GljHka0NalWOCRiKLyuJZDZnRZx5yLb0ebebYST',
  LEO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDe3eAVLKnSd8Hb2JlvGGJ2y28w4kynvSFCB3pyLgWcIh8zVIPYBjIKS2A93VCyBPMix2MIK95iisks_3nvL6fOCbaxYPerwpoQnfuGoe7eYlKeHagGXlmPZ-GPBXCpHu3nQZOLYNx8942V7B_3DWTsayUTNZeKZ3wd9oYrcIPXsUI4ahqfaLIeTMT8bp6SELyF3PKlqus5bVG5NOr8BbXxIPsRlwYp9EXi__eY-6-3Ot78mOpdbXRq2Eywr5B0Dd1uC2d9sUM5b7E',
  HOOT: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_agELOwug9gQIuJFIawNGgpQC_YBj7blRl9ABmt9K48emCXBywWfoG0qV-HltCw3TUcr4VsrFlVLyq3Bv8tLOyQD4JSu3WfWYIWLVWrUBd6-zZG7hisjynBcnOAswqa8UJHiDtJlZqTTNphhKJ7nGSdkX44iRtIIZnFC7899yKT9OAkU2RCwVbQLiScxjr-SMS7kc7-x2a1PHZETpl-3TZPlBgq3wxNZ28WP5sd6k4pZIDWHE5ZVcBdmFz1nVTSqhjeK6ZztxpxqJ',
  OWL_MASCOT: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcplikAR-Hf0EDML-xMoJCNNwDDsI_qQv6XjbWtaq6rVvNPmMqGDbB-979XRLt4Ld7wP2YNzYwq8t4btXjY8fO5DObwGwvO2CLTrv1xsBFsb68x5NwNFGSAK3zkXL_h3hTEt3HpQ0y5MKcS0hiflfneN9-Mz_PqYAPpT8M_-Qfg6OfCW1U5g2KYGcCyfz9CJRZ-X7Ihkh15WktmrYJzLdu3MSLJ7i1MNLgUOGuc8krGrs51xAgkTsqmBTZnVM9LG_9pzUY-gcT1Xf6',
  CHILD_READING: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtGT5BAf8m-45yJByoZ8-ZEowkjTyuVHvEzbvNDD5D-ITm3sR_59bTCk1NFmSC77RAba0X9OinKR-n0V0Ju2i0iU61kNbmMrBGYQDE0YxFN-Q3WhSapvqjDdW3usurk7lUqQ0vsfEibSX1FO78pPnve_0KrcI_1_Bbivm-9e1mKdy8p2po-O38ITkqhGOORkY9vjV1UZ4RXha5m7HYacCmnyOXpltL_SsdOfJ1KwsbSYPN-zxKepckTrZbxEsP5pN2NTZQgGxi2ZOm',
  PARENT_PROFILE: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrVt6peaMWUmdP-hVnTlY1oMuvmf44va1aYyKhp0p-R7r8FC21VI-cyURgGZ-2LjXUtKsm037NrRfZP4R470-5qkMOB9k1A6JoPnKaUJf46QIh9aSIIN5mZ5qkjeWXT6rHLTmdJgSCARJNiSz23Auxo4Rpqu47uKUlvMJY-J-McCZ5yg6VCR8p0bJnlIlUa5l5ijNTBJMmrBHjvQc9OD4aO1JNXu8BxXdpx0i3U2735ZP5PQeH-l4aLHOuoHa4kI9sYzenawGfvk2L',
  CHECKMARK_CUSTOM: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0T6RRmFBr1WjqrpUIy7x1t-cguOTNGrJJ9Scg1HHEdpPLdNHOiFt4oxiSYWbMSuo1X6FFozgM5aqgpUS-eyu0yQmOvd90RRtPVK9EhEHbqGz03XEEPLwWNzyowVeJe_ysSXEUlnesNf5Np1vcQ9hPFUKxi4QOZN7NbWzr_-bs7H5SpbYBlTRfG-U_HlQAEPgi5-Fjhf4TRnghnRai9DIw645-iSvWSLXGFEmQlZM2Jv3s4IkltryHskAqMqrBU5ha5zNLomHtD9Bk',
  ARROW_DOWN_SELECT: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5D_pMu2mW2v_bW-lQml07hcwmMBixxYPV7sb7HDA4E4niGutwVVp86C1zx-qadmJFXRXc6nMQ3OZOFcbmL237gso8OWCW1ub2DVXoKmSKJq4XZLwCkQ25hLFgvjOw_9862tT3zGRdoTfCeZnmVmPc-cvZTCzbI3lYJSr6KqSEcXmG0vWSiZx5otiMd_ZL2GDZDbPf7agN6H2SDRzrtkgto3xZ-pq20WY-ia2afs_ViYh0Le1a_fS48FHqFn1m6OUqA3XnvUGZoA1',
};

export const DUMMY_CHILD_PROFILES: ChildProfile[] = [
  {
    id: '1',
    name: 'Sam',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIL4SaqOT70CTESv6IzEFSvSxVoqKhcp4TbQQBS2oPBHzCnbIhtpSdMTkUt6fEqWLWG2ag_uPoCarPfeSLydlbFIex4Jh4XMP6Nn2MHR5XpPswAKwikVh91xZ5znnOv2aARlWY0FJFC7LFerG5dRaaMfJqe00_8yTLlb_tyP9jYAD0ZZ4qHTpZEFW8WZ4we_9g11XS89na9A_TnfuNNG1s212VBErZ5aNLVQ8TZpG_utp5aLL5KlQJ6fueXiYosROtgfyhKdInS9y',
    status: 'active',
  },
  {
    id: '2',
    name: 'Maya',
    avatarUrl: 'https://picsum.photos/100/100', // Placeholder for Maya
    status: 'inactive',
    lastRead: '2 days ago',
  },
];

export const DUMMY_BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'The Secret Garden',
    author: 'Frances Burnett',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    type: 'owned',
    price: 499,
    stock: 12
  },
  {
    id: 'b2',
    title: 'Wonder',
    author: 'R.J. Palacio',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCqyPnFekf2ja2zDGrKyaeaweL9vT1atXB5BBkx7N3NXMKmYH53jyRyteCWfBg2QFlDxqtZgpXU3Uy7FnIr8pttFI8hvACljniWUNyLgHGKWiu9u3PnF-L138ngOrUhDSkBDTVZYnLKInQAbKhcTB4SpiDLkFceoEMrrAgi6ceIBubNJrBjg7TuYd-q3mzob-66BBSPPSQ1VwGErRUzs4sVCuI0rYvMHCfnpLEsV3uZVpbQiIymxFE1zbMZkjm6uzihvZ7qD2YV2yt',
    type: 'subscription',
    price: 349,
    stock: 5
  },
  {
    id: 'b3',
    title: 'Island of Blue Dolphins',
    author: 'Scott O\'Dell',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GZNeeydPqUSXxKIpV9iC52RAajXS__l1tz2R4Fa2B6tb_x9Ww5Zocv3oGTNu1k0CexyyfFw4iP-LvOeVevELwdEvMrhBEL-N_5WD_JJGhXJtawJG_fZxWqa9ghoxU0oldkPujU31DBeoMJUI9LtcRvaeHO3IduU3VK81dJlNc3ViuYtBwxCmCrPPdMbArQq9ByZrkusGy1KiOMHmrCUAHOTVo_2ZSRlYQc3PWoyUvg6wGu71epwyk0bMcRtTVowiSz_SBn823ilG',
    type: 'owned',
    price: 549,
    stock: 0
  },
  {
    id: 'b4',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    type: 'subscription',
    price: 299,
    stock: 8
  },
  {
    id: 'b5',
    title: 'Classic Tales Collection',
    author: 'Various Authors',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    type: 'subscription',
    price: 199,
    stock: 25
  },
  {
    id: 'b6',
    title: 'A New Adventure',
    author: 'Jane Doe',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCqyPnFekf2ja2zDGrKyaeaweL9vT1atXB5BBkx7N3NXMKmYH53jyRyteCWfBg2QFlDxqtZgpXU3Uy7FnIr8pttFI8hvACljniWUNyLgHGKWiu9u3PnF-L138ngOrUhDSkBDTVZYnLKInQAbKhcTB4SpiDLkFceoEMrrAgi6ceIBubNJrBjg7TuYd-q3mzob-66BBSPPSQ1VwGErRUzs4sVCuI0rYvMHCfnpLEsV3uZVpbQiIymxFE1zbMZkjm6uzihvZ7qD2YV2yt',
    type: 'owned',
    price: 449,
    stock: 3
  },
];

export const DUMMY_DASHBOARD_BOOKS: Book[] = [
  {
    id: 'db1',
    title: 'The Secret Garden',
    author: 'Chapter 4: I am the Master',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    type: 'owned', // Type not relevant for dashboard, but keeping for consistency
  },
  {
    id: 'db2',
    title: 'Wonder',
    author: 'Chapter 2: Ordinary',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCqyPnFekf2ja2zDGrKyaeaweL9vT1atXB5BBkx7N3NXMKmYH53jyRyteCWfBg2QFlDxqtZgpXU3Uy7FnIr8pttFI8hvACljniWUNyLgHGKWiu9u3PnF-L138ngOrUhDSkBDTVZYnLKInQAbKhcTB4SpiDLkFceoEMrrAgi6ceIBubNJrBjg7TuYd-q3mzob-66BBSPPSQ1VwGErRUzs4sVCuI0rYvMHCfnpLEsV3uZVpbQiIymxFE1zbMZkjm6uzihvZ7qD2YV2yt',
    type: 'owned',
  },
];

export const DUMMY_PERSONALIZED_BOOKS: Book[] = [
  {
    id: 'pb1',
    title: 'Island of Blue Dolphins',
    author: "Scott O'Dell",
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GZNeeydPqUSXxKIpV9iC52RAajXS__l1tz2R4Fa2B6tb_x9Ww5Zocv3oGTNu1k0CexyyfFw4iP-LvOeVevELwdEvMrhBEL-N_5WD_JJGhXJtawJG_fZxWqa9ghoxU0oldkPujU31DBeoMJUI9LtcRvaeHO3IduU3VK81dJlNc3ViuYtBwxCmCrPPdMbArQq9ByZrkusGy1KiOMHmrCUAHOTVo_2ZSRlYQc3PWoyUvg6wGu71epwyk0bMcRtTVowiSz_SBn823ilG',
    type: 'owned',
    tag: { label: 'Boosts Vocab', color: 'primary', icon: 'auto_stories' },
    price: 549,
    stock: 0
  },
  {
    id: 'pb2',
    title: 'Wonder',
    author: 'R.J. Palacio',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCqyPnFekf2ja2zDGrKyaeaweL9vT1atXB5BBkx7N3NXMKmYH53jyRyteCWfBg2QFlDxqtZgpXU3Uy7FnIr8pttFI8hvACljniWUNyLgHGKWiu9u3PnF-L138ngOrUhDSkBDTVZYnLKInQAbKhcTB4SpiDLkFceoEMrrAgi6ceIBubNJrBjg7TuYd-q3mzob-66BBSPPSQ1VwGErRUzs4sVCuI0rYvMHCfnpLEsV3uZVpbQiIymxFE1zbMZkjm6uzihvZ7qD2YV2yt',
    type: 'owned',
    tag: { label: 'Complex Plots', color: 'orange-600', icon: 'psychology' },
    price: 349,
    stock: 5
  },
  {
    id: 'pb3',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    type: 'owned',
    tag: { label: 'Fluency Focus', color: 'blue-500', icon: 'speed' },
    price: 299,
    stock: 8
  },
  {
    id: 'pb4',
    title: 'The Secret Garden',
    author: 'Frances Burnett',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    type: 'owned',
    tag: { label: 'Bestseller', color: 'primary', icon: 'star' },
    price: 499,
    stock: 12
  },
];

export const DUMMY_READING_ORDERS: ReadingOrder[] = [
  {
    id: 'o1',
    bookTitle: 'The Secret Garden',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    status: 'in-transit',
    orderId: '#3942',
    date: 'Oct 24, 2023',
  },
  {
    id: 'o2',
    bookTitle: 'Wonder',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCqyPnFekf2ja2zDGrKyaeaweL9vT1atXB5BBkx7N3NXMKmYH53jyRyteCWfBg2QFlDxqtZgpXU3Uy7FnIr8pttFI8hvACljniWUNyLgHGKWiu9u3PnF-L138ngOrUhDSkBDTVZYnLKInQAbKhcTB4SpiDLkFceoEMrrAgi6ceIBubNJrBjg7TuYd-q3mzob-66BBSPPSQ1VwGErRUzs4sVCuI0rYvMHCfnpLEsV3uZVpbQiIymxFE1zbMZkjm6uzihvZ7qD2YV2yt',
    status: 'subscription',
    orderId: '#3821',
    date: 'Oct 12, 2023',
    details: 'Return by: Nov 12 (5 days left)',
  },
  {
    id: 'o3',
    bookTitle: 'Island of Blue Dolphins',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GZNeeydPqUSXxKIpV9iC52RAajXS__l1tz2R4Fa2B6tb_x9Ww5Zocv3oGTNu1k0CexyyfFw4iP-LvOeVevELwdEvMrhBEL-N_5WD_JJGhXJtawJG_fZxWqa9ghoxU0oldkPujU31DBeoMJUI9LtcRvaeHO3IduU3VK81dJlNc3ViuYtBwxCmCrPPdMbArQq9ByZrkusGy1KiOMHmrCUAHOTVo_2ZSRlYQc3PWoyUvg6wGu71epwyk0bMcRtTVowiSz_SBn823ilG',
    status: 'pending-return',
    orderId: '#3710',
    date: 'Oct 30, 2023',
  },
  {
    id: 'o4',
    bookTitle: 'The Midnight Library',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    status: 'delivered',
    orderId: '#3655',
    date: 'Oct 28, 2023',
  },
];

export const DUMMY_ORAL_PASSAGES = [
  'The little orange cat sat on the green grass. He watched a blue bird fly high into the sky. It was a sunny day.',
  'A tiny mouse scurried across the floor. It found a piece of cheese and quickly ate it. The mouse was very happy.',
  'The big red ball rolled down the hill. A small child chased after it, laughing. What a fun day to play!',
];


export const DUMMY_RECOMMENDED_BOOKS: Book[] = [
  {
    id: 'rec1',
    title: 'The Secret Garden',
    author: 'Fluency Focus',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKbO6fU2iGALd26UFoWpR0Y3sey3WCtAa79X6v2WeidW6vzoRhJA1tSO3cr7AmZs31XP2HPOvQNGzkMhLnhPkTaWUkBV6ViXSXzGgKFiF1ZFJpbbUQmlQoPFs6WpCSaCxfZJOUt_FSZevL6oG8XiyP0VJ4b43pkOBhhJoLBWtnFrxIjrxDdWDRaCJ2t0XwITiVwF1FYeF1ZNhmsrJksTMcCfLHXpoRkBGCAzn3u9YLOM1k8v1v40eAGETEN2u-97txgg9Sl4wpkY',
    type: 'subscription',
    tag: { label: 'Rhythmic Text', color: 'primary', icon: 'auto_stories' },
  },
  {
    id: 'rec2',
    title: 'Blue Dolphins',
    author: 'Oral Reading',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GZNeeydPqUSXxKIpV9iC52RAajXS__l1tz2R4Fa2B6tb_x9Ww5Zocv3oGTNu1k0CexyyfFw4iP-LvOeVevELwdEvMrhBEL-N_5WD_JJGhXJtawJG_fZxWqa9ghoxU0oldkPujU31DBeoMJUI9LtcRvaeHO3IduU3VK81dJlNc3ViuYtBwxCmCrPPdMbArQq9ByZrkusGy1KiOMHmrCUAHOTVo_2ZSRlYQc3PWoyUvg6wGu71epwyk0bMcRtTVowiSz_SBn823ilG',
    type: 'owned',
    tag: { label: 'Advanced Diction', color: 'primary', icon: 'psychology' },
  },
];
