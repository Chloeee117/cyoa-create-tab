export interface CyoaChoice {
  index: number;
  text: string;
}

export const hybridChoices: CyoaChoice[] = [
  { index: 1, text: '여유로운 화답 — 살짝 웃으며 "고마워, 나도 좋았어."' },
  { index: 2, text: '거침없는 직구 — "나도. 솔직히 헤어지기 싫다."' },
  { index: 3, text: '고장난 리액션 — 눈을 마주치지 못하며 고개를 숙인다' },
  { index: 4, text: '능글맞은 반격 — "좋았다니 다행이네. 밥값은 네가 내는 거다."' },
];

export const dialogueChoices: CyoaChoice[] = [
  { index: 1, text: '*유저는 캐릭터의 말에 기쁜 듯 살짝 웃으며, 캐릭터의 눈을 마주본다.* 고마워, 나도 좋았어.' },
  { index: 2, text: '*유저는 캐릭터를 올려다보며, 아쉬운 얼굴로 입을 뗀다.* 나도. 솔직히 헤어지기 싫다.' },
  { index: 3, text: '*캐릭터의 말에 유저의 얼굴이 붉어진다. 부끄러운 듯 눈을 마주치지 못하며 고개를 푹 숙인다.*' },
  { index: 4, text: '*잠시 놀란 듯하다가, 이내 장난스럽게 입꼬리를 올리며* 좋았다니 다행이네. 그럼 밥은 네가 사는 거다?' },
];
