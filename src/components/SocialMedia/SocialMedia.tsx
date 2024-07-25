import React from 'react';
import styled from 'styled-components';
import facebook from '../../assets/images/social_media_logos/facebook.png';
import twitter from '../../assets/images/social_media_logos/twitter.png';
import instagram from '../../assets/images/social_media_logos/instagram.png';
import spotify from '../../assets/images/social_media_logos/spotify.png';
import linkedin from '../../assets/images/social_media_logos/linkedin.png';

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

  &:hover {
    color: #00aced;
  }
`;

const SocialMediaImage = styled.img`
  width: 30px;
  height: 30px;
`;

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaButton href="https://www.facebook.com">
        <SocialMediaImage src={facebook} alt="Facebook" />
      </SocialMediaButton>
      <SocialMediaButton href="https://www.twitter.com">
        <SocialMediaImage src={twitter} alt="Twitter" />
      </SocialMediaButton>
      <SocialMediaButton href="https://www.instagram.com">
        <SocialMediaImage src={instagram} alt="Instagram" />
      </SocialMediaButton>
      <SocialMediaButton href="https://www.spotify.com">
        <SocialMediaImage src={spotify} alt="Spotify" />
      </SocialMediaButton>
      <SocialMediaButton href="https://www.linkedin.com">
        <SocialMediaImage src={linkedin} alt="LinkedIn" />
      </SocialMediaButton>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
