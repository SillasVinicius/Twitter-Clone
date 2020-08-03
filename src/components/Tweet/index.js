import React from 'react';

import { 
    Container,
    Retweeted,
    MarkIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

function Tweet() {
  return (
      <Container>
          <Retweeted>
              <MarkIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />
              <Content>
                <Header>
                    <strong>Microsoft</strong>
                    <span>@microsoft</span>

                    <Dot />
                    <time>25 de jul</time>
                </Header>

                <Description>
                 "If no one has anything else, 
                 we'll give you ten minutes 
                 back to your day."
                </Description>
                <ImageContent />
                <Icons>
                    <Status>
                        <CommentIcon />18
                    </Status>
                    <Status>
                        <RetweetIcon />18
                    </Status>
                    <Status>
                        <LikeIcon />999
                    </Status>
                </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;