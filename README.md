# Vierzig Theme

This Repo contains the [Vierzig Theme](https://github.com/ASVBPREAUBV/vierzig) (a [Hugo](https://gohugo.io/) Theme)

View the live [Demo](https://vierzig-theme-demo.netlify.com/) or the [source code for the demo](https://github.com/ASVBPREAUBV/vierzig-theme-demo)

Change the Content here in the [Admin Interface](https://vierzig-theme-demo.netlify.com/admin)

The [Demo](https://vierzig-theme-demo.netlify.com/) is also an example of a live site running on Netifly.


## Installation

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?https://github.com/ASVBPREAUBV/vierzig-theme-demo)


Create a new Hugo Site and inside the site directory run the following commands:

    $ cd themes
    $ git clone https://github.com/ASVBPREAUBV/vierzig

To learn how to create a Hugo Site read the [official guide](//gohugo.io/overview/installing/) of Hugo.

### Installation with netlify for build and deployment

If you are using Netlify to host your hugo site, you will want to add it as a submodule instead of cloning:

    $ cd themes
    $ git submodule add https://github.com/ASVBPREAUBV/vierzig

This is because Netlify uses the hugo build command when autopublish is enabled and will produce an error if the theme is not a submodule. See the [Hugo Guide](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/#use-hugo-themes-with-netlify) for more information.

If your javascript or css isn't rendering, check your BaseURL frontmatter in the `config.toml` file. This needs to be set to match the URL you are publishing to. i.e. if you are publishing to https://www.yourdomain.com your frontmatter should be `BaseURL = https://www.yourdomain.com`

## Using the theme

After cloning Vierzig or adding it as a submodule, there are a few other things you should do:

### Config File

No Config Params are needed starting.

For all possible Config Params you can look [here](https://github.com/ASVBPREAUBV/vierzig-theme-demo/blob/master/config.toml)

### Contact form

This page is static so [formspree.io](https://formspree.io/) is used to forward the message to your email.
Visitors can send you up to 1,000 emails per month for free.

## Contributing

Find a bug or want a new feature? Use the issue tracker or submit a pull request.

## License

This theme is released under the Creative Commons Attribution 3.0.
For more information read the [License](https://github.com/ASVBPREAUBV/vierzig/blob/master/LICENSE.md).

## Acknowledgements

Thanks to:
- MarcusVirg from [theme forty](//github.com/MarcusVirg/forty) for creating the hugo theme
- AJ from [HTML5 UP](https://html5up.net/) for creating the theme
- [Bjørn Erik Pedersen](https://github.com/bep), [Steve Francia](//github.com/spf13), [digitalcraftsman](//github.com/digitalcraftsman), and others for creating and maintaining Hugo.
