bkbootstrap
===========

#Potential Changes to Bootstrap

- We split the CSS up into partials. Easier to maintain and read.

```
basekit-bootstrap.less (imports the following.)
  - default.less (maybe look into change this to body.less and text.less)
  - media-queries.less
  - custom-css (this should be removed and placed in the templates)
  - header.less (I would suggest this doesn't belong in bootstrap)
  - footer.less (I would suggest this doesn't belong in bootstrap)
  - clearfix.less
  - extended-nav.less
  - feature.less
  - click-to-call.less
  - button.less
  - content.less
  - image.less
  - gallery.less
  - divider.less
  - redirect.less
  - twitter.less
  - contact-form.less
  - tweet-this.less
  - dropbox.less
  - paypal.less
  - social.less
  - profile Widget.less
  - map.less
  - signup-form.less
  - slideshow.less
  - blog-post.less
  - blog-list-posts.less
  - menu-sections.less
  - menu.less

```

###NOTES

- The blog css should be split into CSS for the post and CSS for the LESS
- Number 25 misc-media-queries.less shouldn't exist. Gallery place in the gallery.less file and wrapper css should live in the template