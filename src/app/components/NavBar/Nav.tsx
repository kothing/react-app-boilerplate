import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: rgba(215, 113, 88, 1);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

// .withComponent 创建一个新的StyledComponent，并应用于其他的标签或组件，且使用相同的样式
const StyledLink = Item.withComponent(Link);

export function Nav() {
  return (
    <Wrapper>
      <Item href="/" title="Documentation Page">
        Home
      </Item>
      <StyledLink to={process.env.PUBLIC_URL + '/notfound'}>NotFound</StyledLink>
      <Item
        href="https://github.com/kothing/react-typescrit-app-template"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        Github
      </Item>
    </Wrapper>
  );
}
