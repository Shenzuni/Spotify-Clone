declare namespace Spotify {
  interface PlaybackState {
    timestamp?: number
    playback_id?: string
    playback_quality?: string
    playback_features?: {
      hifi_status: string
    }
  }
  interface Artist {
    url?: string
  }
  interface Image {
    size?: string
  }
  interface Track {
    id: string
    uid?: string
    linked_from?: {
      uri: string | null
      id: string | null
    }
    track_type?: string
    duration_ms?: number
  }
  interface PlaybackRestrictions {
    disallow_toggling_repeat_context_reasons: string[]
    disallow_toggling_repeat_track_reasons: string[]
    disallow_toggling_shuffle_reasons: string[]
    disallow_resuming_reasons?: string[]
  }
  interface PlaybackDisallows {
    toggling_repeat_context: boolean
    toggling_repeat_track: boolean
    toggling_shuffle: boolean
    resuming?: boolean
  }
}
