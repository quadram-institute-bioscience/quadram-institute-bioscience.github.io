---
title: 'News'
date: 2018-02-22T17:01:34+07:00
layout: page
bodyClass: page-about
---

 
<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
      <p><em>{{ page.date | date: "%B %e, %Y" }}</em></p>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
