import S from "@sanity/desk-tool/structure-builder";
import client from 'part:@sanity/base/client'
import locationStore from 'part:@sanity/base/location'
import {
  map
} from 'rxjs/operators'






const cowboy = S.editor()
  .id('The Wagon')
  .schemaType("wagon")
  .documentId('the-wagon')

const ranch = S.list()
  .title("Content")
  .items([
    S.listItem()
    .title('The Ranch')
    .showIcon(true)
    .child(
      S.editor()
      .id('The Ranch')
      .schemaType("ranch")
      .documentId('the-ranch')
    ),
    ...S.documentTypeListItems().filter(type => !['wagon', 'ranch', 'recipe', 'ingredient'].includes(type.getId()))
  ])

const homestead = S.list()
  .title("Content")
  .items([
    S.listItem()
    .title('The Ranch')
    .showIcon(true)
    .child(
      S.editor()
      .id('The Ranch')
      .schemaType("ranch")
      .documentId('the-ranch')
    ),
    ...S.documentTypeListItems().filter(type => !['wagon', 'ranch'].includes(type.getId()))
  ])
const locations = {
  cowboy,
  ranch,
  homestead
}
let last = ''
export default () => {
  return locationStore.state.pipe(map(({
    location
  }) => {
    const loc = location.pathname.split('/')[1].replace('intent', last) || 'ranch'
    last = loc !== 'intent' && loc
    console.log('PATH', loc)
    return locations[loc]
  }))
}
//




console.log(location.pathname.split('/')[1])
