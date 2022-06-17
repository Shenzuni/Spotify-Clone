declare namespace SpotifyApi {
  interface CurrentUsersProfileResponse {
    birthdate?: string
    explicit_content: {
      filter_enabled: boolean
      filter_locked: boolean
    }
  }
  interface ImageObject {
    height?: string | null
    width?: string | null
  }
}
