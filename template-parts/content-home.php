<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package rainbird
 */

?>


	<div class="pb-blog-col">
		<a href="<?php the_permalink();?>" title="<?php the_title_attribute(); ?>">
			<div class="blog-img">
				<?php the_post_thumbnail(); ?>
			</div>
			<div class="blog-info">
				<span><?php echo get_the_date('M j, Y') ?></span>
				<h3><?php the_title(); ?></h3>
				<p><?php the_excerpt(); ?></p>
			</div><!-- /.blog-info -->
		</a>
	</div><!-- /.pb-blog-row -->




