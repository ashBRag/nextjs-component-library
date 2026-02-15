export class BlogDto {
  "title": string;
  "source": string;
  "url": string;
  "description": string;
  "image": string;
  "createdAt": Date;
  "tags": string[];
}

export class BlogResponseDto {
  "blogs": BlogDto[];
}
