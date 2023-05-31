import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        'id':1,
        'rating' :10,
        'text': 'This is a sample text.',
      },
      {
        'id':2,
        'rating' :8,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta leo odio, vitae rhoncus augue gravida nec. Curabitur aliquet aliquet tortor sit amet consectetur.',
      },
      {
        'id':3,
        'rating' :9,
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta leo odio, vitae rhoncus augue gravida nec. Curabitur aliquet aliquet tortor sit amet consectetur.',
      }
])