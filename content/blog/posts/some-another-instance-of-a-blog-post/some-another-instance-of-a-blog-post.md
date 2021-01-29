---
title: 'Some Another Instance Of a Blog Post'
path: 'some-another-instance-of-a-blog-post'
date: '29 January, 2021'
category: 'Category'
thumbnail: '/images/posts/blog_test.jpg'
coverImage: '/images/posts/blog_test.jpg'
author:
  name: 'Abdallah Abis'
  image: '/images/posts/authors/abdallah-abis/abis.png'
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna tortor, semper et lacinia a, efficitur fringilla elit. Donec rutrum, massa quis luctus luctus, libero dui consequat mauris, et convallis leo odio in magna. Maecenas lobortis placerat faucibus. Praesent a metus eu odio tempor laoreet. Proin est nisl, vehicula id efficitur vel, tempor non turpis. Nullam felis urna, vehicula in fermentum sit amet, cursus ac elit. Nullam id fermentum justo, imperdiet pulvinar ligula. Nulla in augue eu lacus scelerisque luctus. Aliquam leo quam, finibus non aliquam interdum, condimentum ut odio. Morbi mollis metus justo, in scelerisque lectus elementum vitae.'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna tortor, semper et lacinia a, efficitur fringilla elit. Donec rutrum, massa quis luctus luctus, libero dui consequat mauris, et convallis leo odio in magna. Maecenas lobortis placerat faucibus. Praesent a metus eu odio tempor laoreet. Proin est nisl, vehicula id efficitur vel, tempor non turpis. Nullam felis urna, vehicula in fermentum sit amet, cursus ac elit. Nullam id fermentum justo, imperdiet pulvinar ligula. Nulla in augue eu lacus scelerisque luctus. Aliquam leo quam, finibus non aliquam interdum, condimentum ut odio. Morbi mollis metus justo, in scelerisque lectus elementum vitae.

```javascript
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ navData, postData }) => {
	return (
		<Layout data={navData}>
			<Container>
				<CategoryAndDate date={postData?.date} category={postData?.category} />
				<PostTitle>{postData?.title}</PostTitle>
				<Content
					unwrapDisallowed={true}
					children={postData.content}
					renderers={renderers}
				/>
			</Container>
		</Layout>
	);
};

export default BlogPost;
```

Maecenas eget lacinia justo. Cras vehicula massa sapien, condimentum cursus nisl euismod sit amet. Aenean in erat vestibulum, dignissim neque nec, porttitor odio. Etiam at cursus dui. Mauris vel convallis purus. Suspendisse velit elit, blandit vel diam laoreet, dignissim euismod quam. Vivamus accumsan nibh purus, non dictum mi dignissim at. Integer vel tempor tellus. Aliquam dignissim id purus in congue. Ut gravida luctus diam, dapibus interdum odio vestibulum ac. Mauris non metus nisi. Nam rutrum gravida tellus sed facilisis. Donec pulvinar rutrum aliquet. Donec rutrum laoreet ante, vitae rutrum lacus ornare vitae.

![instance of a blog post](/images/posts/blog_test.jpg)

Nulla convallis sed justo id condimentum. Nam a volutpat libero. Phasellus sed dolor non tellus pellentesque lacinia. Vivamus condimentum nulla sem, at luctus lectus sollicitudin sed. Vivamus a sapien felis. Quisque ultrices metus non leo pulvinar.

## Lorem ipsum dolor sit amet

### Lorem ipsum dolor sit amet

#### Lorem ipsum dolor sit amet

##### Lorem ipsum dolor sit amet

###### Lorem ipsum dolor sit amet

Nulla convallis sed justo id condimentum. Nam a volutpat libero. Phasellus sed dolor non tellus pellentesque lacinia. Vivamus condimentum nulla sem, at luctus lectus sollicitudin sed. Vivamus a sapien felis. Quisque ultrices metus non leo pulvinar.

## Lorem ipsum dolor sit amet

- justo id condimentum
- justo id condimentum
- justo id condimentum
- justo id condimentum
- justo id condimentum
- justo [id condimentum](https://abisabdallah.com)

> Vivamus a sapien felis. Quisque ultrices metus non leo pulvinar.
