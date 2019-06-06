import React, { Component } from 'react';

import FooterContainer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Hero from 'react-bulma-components/lib/components/hero';

class Footer extends Component {
  render() {
    return (
        <div>
            <Hero size="fullheight">
                <Hero.Head renderAs="header" />
                <Hero.Body />
                <Hero.Footer>
                    <FooterContainer>
                        <Container>
                            <Content style={{ textAlign: 'center' }}>
                                This is footer
                            </Content>
                        </Container>
                    </FooterContainer>
                </Hero.Footer>
            </Hero>
        </div>
    );
  }
}

export default Footer;