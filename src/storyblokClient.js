import StoryblokClient from 'storyblok-js-client'
 
const client = new StoryblokClient({
  accessToken: 'L5O0kfyjrvqD5B1nPyOVMgtt'
})
 
export const defaultRequestConfig = {
  version: 'draft'
}
 
export default client