import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: #333;
  color: #fff;
`;

const SocialMediaButton = styled.a`
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #444;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #555;
  }
`;

const SocialMediaIcon = styled.span`
  font-size: 1.5rem;
`;

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaButton href="https://www.facebook.com">
        <SocialMediaIcon>FB</SocialMediaIcon>
      </SocialMediaButton>
      <SocialMediaButton href="https://www.twitter.com">
        <SocialMediaIcon>TW</SocialMediaIcon>
      </SocialMediaButton>
      <SocialMediaButton href="https://www.instagram.com">
        <SocialMediaIcon>IG</SocialMediaIcon>
      </SocialMediaButton>
      <SocialMediaButton href="https://www.spotify.com">
        <SocialMediaIcon>SP</SocialMediaIcon>
      </SocialMediaButton>
      <SocialMediaButton href="https://www.linkedin.com">
        <SocialMediaIcon>LI</SocialMediaIcon>
      </SocialMediaButton>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
