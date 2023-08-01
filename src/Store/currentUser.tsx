import { create } from "zustand"

interface CurrentUserDetail {
  username: string
  imagePng: string
  imageWebp: string
  setUserName: (username: string) => void
  setImagePng: (image: string) => void
  setImageWebp: (webp: string) => void
}

export const useCurrentUserDetail = create<CurrentUserDetail>((set) => ({
  username: "",
  imagePng: "",
  imageWebp: "",
  setUserName: (username: string) => {
    set((state) => ({
      ...state,
      username: username,
    }))
  },
  setImagePng: (image: string) => {
    set((state) => ({
      ...state,
      imagePng: image,
    }))
  },
  setImageWebp: (webp: string) => {
    set((state) => ({
      ...state,
      imageWebp: webp,
    }))
  },
}))
