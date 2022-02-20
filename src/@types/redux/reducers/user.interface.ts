export interface UserInfo {
  bio: string;
  createdAt: string | Date;
  deleted: boolean;
  email: string;
  emailFlag: boolean;
  github: string;
  gradeId: number;
  id: number;
  imagePath: string;
  imageUrl: string;
  intro: string;
  nickname: string;
  password: string;
  role: "ADMIN" | "GUEST" | "USER";
  score: number;
  socialId: string;
  socialType: "GITHUB" | "GOOGLE" | "KAKAO" | "NONE";
  updatedAt: string | Date;
}
