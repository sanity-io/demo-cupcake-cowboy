import S from "@sanity/desk-tool/structure-builder";

export default () =>
S.list()
  .title("Content")
  .items([
    S.listItem()
    .title('The Wagon')
    .id('wagon')
    .child(
      S.editor()
      .id('The Wagon')
      .schemaType("wagon")
      .documentId('the-wagon')
    ),
    //...S.documentTypeListItems().filter(type => !['wagon'].includes(type.getId()))
  ])
