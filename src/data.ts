import {
  EditorState,
  ContentState,
  RawDraftContentState,
  convertToRaw,
} from 'draft-js';

const covert = (content: string): RawDraftContentState =>
  convertToRaw(
    EditorState.createWithContent(
      ContentState.createFromText(content)
    ).getCurrentContent()
  );

export interface PostType {
  id: number;
  date: string;
  title: string;
  content: RawDraftContentState;
  imgList?: string[];
  audio?: string;
}

export const data: PostType[] = [
  {
    id: 1,
    title: 'Orci varius natoque penatibus et magnis',
    content: covert(
      'Nunc eu quam sit amet justo elementum mollis Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. '
    ),

    date: 'May 3, 2022 16:22',
  },
  {
    id: 2,
    title: 'Proin laoreet semper',
    content: covert(
      'Nunc eu quam sit amet justo elementum mollis Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi.gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. '
    ),
    date: 'May 3, 2022 16:22',
    imgList: [
      'https://via.placeholder.com/150.png',
      'https://via.placeholder.com/600x120.png',
      'https://via.placeholder.com/300x100.png',
      'https://via.placeholder.com/200.png',
    ],
  },
  {
    id: 3,
    title: 'Proin laoreet semper tortor ac posuere',
    content: covert(
      'Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. '
    ),
    date: 'May 3, 2022 16:22',
    audio: 'music',
  },
];
