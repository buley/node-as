
var AS = {};
//published defaults to now; verb defaults to "post"
AS.genericEvent = function( object, verb, published, generator ) {

	var result = {};

	if( !!published ) {
		result.published = published;
	} else {
		result.published = new Date();
	}
	
	if( !!provider ) {
		result.provider = provider;
	}
	if( !!generator ) {
		result.generator = generator;
	}
	
	if( !!object ) {
		result.object = object;
	}
		
	if( !!verb ) {
		result.verb = verb;
	} 
	
	// "random" id
	result.id = crypto.createHash('md5').update( result ).digest("hex");

	return result;

};

var Buleys = Buleys || {};

Buleys.stream = Buleys.stream || {};

Buleys.stream.models = Buleys.stream.models || {};

Buleys.stream.map = Buleys.stream.map || {};


Buleys.stream.models.news = function( args ) {

	var result = Buleys.stream.activity( {
		'actor_attachments': args.actor_attachments,
		'actor_content': args.actor_content,
		'actor_display_name': args.actor_display_name,
		'actor_downstream_duplicates': args.actor_downstream_duplicates,
		'actor_id': args.actor_id,
		'actor_image_height': args.actor_image_height,
		'actor_image_url': args.actor_image_url,
		'actor_image_width': args.actor_image_width,
		'actor_object_type': args.actor_object_type,
		'actor_published': args.actor_published,
		'actor_summary': args.actor_summary,
		'actor_updated': args.actor_updated,
		'actor_upstream_duplicates': args.actor_upstream_duplicates,
		'actor_url': args.actor_url,
		'content': args.content,
		'generator_attachments': args.generator_attachments,
		'generator_content': args.generator_content,
		'generator_display_name': args.generator_display_name,
		'generator_downstream_duplicates': args.generator_downstream_duplicates,
		'generator_id': args.generator_id,
		'generator_image_height': args.generator_image_height,
		'generator_image_url': args.generator_image_url,
		'generator_image_width': args.generator_image_width,
		'generator_object_type': args.generator_object_type,
		'generator_published': args.generator_published,
		'generator_summary': args.generator_score,
		'generator_summary': args.generator_summary,
		'generator_updated': args.generator_updated,
		'generator_upstream_duplicates': args.generator_upstream_duplicates,
		'generator_url': args.generator_url,
		'icon_height': args.icon_height,
		'icon_width': args.icon_width,
		'icon_url': args.icon_url,
		'id': args.id,
		'object_attachments': args.object_attachments,
		'object_content': args.object_content,
		'object_display_name': args.object_display_name,
		'object_downstream_duplicates': args.object_downstream_duplicates,
		'object_id': args.object_id,
		'object_image_height': args.object_image_height,
		'object_image_url': args.object_image_url,
		'object_image_width': args.object_image_width,
		'object_object_type': args.object_object_type,
		'object_published': args.object_published,
		'object_summary': args.object_summary,
		'object_updated': args.object_updated,
		'object_upstream_duplicates': args.object_upstream_duplicates,
		'object_url': args.object_url,
		'published': args.published,
		'provider_attachments': args.provider_attachments,
		'provider_content': args.provider_content,
		'provider_display_name': args.provider_display_name,
		'provider_downstream_duplicates': args.provider_downstream_duplicates,
		'provider_id': args.provider_id,
		'provider_image_height': args.provider_image_height,
		'provider_image_url': args.provider_image_url,
		'provider_image_width': args.provider_image_width,
		'provider_object_type': args.provider_object_type,
		'provider_published': args.provider_published,
		'provider_score': args.provider_score,
		'provider_summary': args.provider_summary,
		'provider_updated': args.provider_updated,
		'provider_upstream_duplicates': args.provider_upstream_duplicates,
		'provider_url': args.provider_url,
		'target_attachments': args.target_attachments,
		'target_content': args.target_content,
		'target_display_name': args.target_display_name,
		'target_downstream_duplicates': args.target_downstream_duplicates,
		'target_id': args.target_id,
		'target_image_height': args.target_image_height,
		'target_image_url': args.target_image_url,
		'target_image_width': args.target_image_width,
		'target_object_type': args.target_object_type,
		'target_published': args.target_published,
		'target_summary': args.target_summary,
		'target_updated': args.target_updated,
		'target_upstream_duplicates': args.target_upstream_duplicates,
		'target_url': args.target_url,
		'title': args.title,
		'updated': args.updated,
		'url': args.url,
		'verb': args.verb

	} );

	if( !!result ) {
		return result;
	} else {
		return false;
	}

};

Buleys.toSlug = function( value ) {
	return value.replace(/[^a-zA-Z0-9-_]+/g, "");
}

Buleys.stream.map.news = function( data ) {

	//console.log('Buleys.stream.map.news', data.item_link, data );
	var request = {
		'object_id': Buleys.toSlug( data.item_link ),
		'actor_display_name': data.item_author,
		'object_url': data.item_link,
		'object_content': data.item_description,
		'object_summary': data.item_title,
		'object_type': 'news',
		'verb': 'publish',
		'object_published': data.item_published_date,
		'object_entities': data.item_entities, //extension
		'object_score': data.score //extension

	};
	
	return Buleys.stream.models.news( request );

};


Buleys.stream.map.tweet = function( data ) {
	//console.log( 'data', data );
	//console.log('Buleys.stream.map.tweet', data.user );
	//console.log('Buleys.stream.map.tweet name display', data.user.screen_name, data.user.name );
	if( !data || "undefined" === typeof data.user || 'undefined' !== typeof data.delete && 'undefined' !== typeof data.scrub_geo || 'undefined' !== typeof data.limit ) {
		return;
	}
	var request = {
		'object_url': "http://twitter.com/#!/" + data.user.screen_name.toLowerCase() + "/status/" + data.id_str,
		'actor_display_name': data.user.name,
		'actor_id': data.user.screen_name,
		'actor_image_url': data.user.profile_image_url,
		'actor_url': data.user.url,
		'actor_summary': data.user.description,
		'object_id': data.id_str,
		'object_summary': data.text,
		'object_type': 'tweet',
		'verb': 'tweet',
		'object_published': data.created_at,
		'object_url': "http://twitter.com/#!/" + data.user.screen_name + "/status/" + data.id_str,
		'provider_display_name': 'Twitter',
		'object_entities': data.tweet_entities, //extension
	};
	
	//If a retweet or reply, add a target

	if( !!data.retweeted_status ) {
		request['verb'] = 'retweet';
		request['target_id'] = data.retweeted_status.user.screen_name;
		request['target_display_name'] = data.retweeted_status.user.name;
		request['target_image_url'] = data.retweeted_status.user.profile_image_url;
		request['target_url'] = data.retweeted_status.user.url;
		request['target_content'] = data.retweeted_status.text;
	} else if( null !== data.in_reply_to_user_id_str ) {
		request['target_id'] = data.in_reply_to_user_id_str;
		request['target_display_name'] = data.in_reply_to_user_id_str;
	}	


	return Buleys.stream.models.tweet( request );

};


Buleys.stream.models.tweet = function( args ) {
	var result = Buleys.stream.activity( {
		'actor_attachments': args.actor_attachments,
		'actor_content': args.actor_content,
		'actor_display_name': args.actor_display_name,
		'actor_downstream_duplicates': args.actor_downstream_duplicates,
		'actor_id': args.actor_id,
		'actor_image_height': args.actor_image_height,
		'actor_image_url': args.actor_image_url,
		'actor_image_width': args.actor_image_width,
		'actor_object_type': args.actor_object_type,
		'actor_published': args.actor_published,
		'actor_summary': args.actor_summary,
		'actor_updated': args.actor_updated,
		'actor_upstream_duplicates': args.actor_upstream_duplicates,
		'actor_url': args.actor_url,
		'content': args.content,
		          'generator_attachments': args.generator_attachments,
		          'generator_content': args.generator_content,
		          'generator_display_name': args.generator_display_name,
		          'generator_downstream_duplicates': args.generator_downstream_duplicates,
		          'generator_id': args.generator_id,
		          'generator_image_height': args.generator_image_height,
		          'generator_image_url': args.generator_image_url,
		          'generator_image_width': args.generator_image_width,
		          'generator_object_type': args.generator_object_type,
		          'generator_published': args.generator_published,
		          'generator_summary': args.generator_score,
		          'generator_summary': args.generator_summary,
		          'generator_updated': args.generator_updated,
		          'generator_upstream_duplicates': args.generator_upstream_duplicates,
		          'generator_url': args.generator_url,
		'icon_height': args.icon_height,
		'icon_width': args.icon_width,
		'icon_url': args.icon_url,
		'id': args.id,
		'object_attachments': args.object_attachments,
		'object_content': args.object_content,
		'object_entities': args.object_entities, //extension
		'object_display_name': args.object_display_name,
		'object_downstream_duplicates': args.object_downstream_duplicates,
		'object_id': args.object_id,
		'object_image_height': args.object_image_height,
		'object_image_url': args.object_image_url,
		'object_image_width': args.object_image_width,
		'object_object_type': args.object_object_type,
		'object_published': args.object_published,
		'object_score': args.object_score,
		'object_summary': args.object_summary,
		'object_updated': args.object_updated,
		'object_upstream_duplicates': args.object_upstream_duplicates,
		'object_url': args.object_url,
		'published': args.published,
		'provider_attachments': args.provider_attachments,
		'provider_content': args.provider_content,
		'provider_display_name': args.provider_display_name,
		'provider_downstream_duplicates': args.provider_downstream_duplicates,
		'provider_id': args.provider_id,
		'provider_image_height': args.provider_image_height,
		'provider_image_url': args.provider_image_url,
		'provider_image_width': args.provider_image_width,
		'provider_object_type': args.provider_object_type,
		'provider_published': args.provider_published,
		'provider_score': args.provider_score,
		'provider_summary': args.provider_summary,
		'provider_updated': args.provider_updated,
		'provider_upstream_duplicates': args.provider_upstream_duplicates,
		'provider_url': args.provider_url,
		'target_attachments': args.target_attachments,
		'target_content': args.target_content,
		'target_display_name': args.target_display_name,
		'target_downstream_duplicates': args.target_downstream_duplicates,
		'target_id': args.target_id,
		'target_image_height': args.target_image_height,
		'target_image_url': args.target_image_url,
		'target_image_width': args.target_image_width,
		'target_object_type': args.target_object_type,
		'target_published': args.target_published,
		'target_summary': args.target_summary,
		'target_updated': args.target_updated,
		'target_upstream_duplicates': args.target_upstream_duplicates,
		'target_url': args.target_url,
		'title': args.title,
		'updated': args.updated,
		'url': args.url,
		'verb': args.verb
	} );

	if( !!result ) {
		return result;
	} else {
		return false;
	}


};

/*
//content, id, published, updated, url, verb
//actor obj 
//object obj
//provider obj
//target obj
* icon:
* icon_url, icon_height, icon_width 
*/

/*
Example model (model!):
	var result = Buleys.stream.activity( {
		'actor_attachments': args.actor_attachments,
		'actor_content': args.actor_content,
		'actor_display_name': args.actor_display_name,
		'actor_downstream_duplicates': args.actor_downstream_duplicates,
		'actor_id': args.actor_id,
		'actor_image_height': args.actor_image_height,
		'actor_image_url': args.actor_image_url,
		'actor_image_width': args.actor_image_width,
		'actor_object_type': args.actor_object_type,
		'actor_published': args.actor_published,
		'actor_summary': args.actor_summary,
		'actor_updated': args.actor_updated,
		'actor_upstream_duplicates': args.actor_upstream_duplicates,
		'actor_url': args.actor_url,
		'content': args.content,
		          'generator_attachments': args.generator_attachments,
		          'generator_content': args.generator_content,
		          'generator_display_name': args.generator_display_name,
		          'generator_downstream_duplicates': args.generator_downstream_duplicates,
		          'generator_id': args.generator_id,
		          'generator_image_height': args.generator_image_height,
		          'generator_image_url': args.generator_image_url,
		          'generator_image_width': args.generator_image_width,
		          'generator_object_type': args.generator_object_type,
		          'generator_published': args.generator_published,
		          'generator_summary': args.generator_score,
		          'generator_summary': args.generator_summary,
		          'generator_updated': args.generator_updated,
		          'generator_upstream_duplicates': args.generator_upstream_duplicates,
		          'generator_url': args.generator_url,
		'icon_height': args.icon_height,
		'icon_width': args.icon_width,
		'icon_url': args.icon_url,
		'id': args.id,
		'object_attachments': args.object_attachments,
		'object_entities': args.object_entities,
		'object_content': args.object_content,
		'object_display_name': args.object_display_name,
		'object_downstream_duplicates': args.object_downstream_duplicates,
		'object_id': args.object_id,
		'object_image_height': args.object_image_height,
		'object_image_url': args.object_image_url,
		'object_image_width': args.object_image_width,
		'object_object_type': args.object_object_type,
		'object_published': args.object_published,
		'object_score': args.object_score,
		'object_summary': args.object_summary,
		'object_updated': args.object_updated,
		'object_upstream_duplicates': args.object_upstream_duplicates,
		'object_url': args.object_url,
		'published': args.published,
		'provider_attachments': args.provider_attachments,
		'provider_content': args.provider_content,
		'provider_display_name': args.provider_display_name,
		'provider_downstream_duplicates': args.provider_downstream_duplicates,
		'provider_id': args.provider_id,
		'provider_image_height': args.provider_image_height,
		'provider_image_url': args.provider_image_url,
		'provider_image_width': args.provider_image_width,
		'provider_object_type': args.provider_object_type,
		'provider_published': args.provider_published,
		'provider_summary': args.provider_score,
		'provider_summary': args.provider_summary,
		'provider_updated': args.provider_updated,
		'provider_upstream_duplicates': args.provider_upstream_duplicates,
		'provider_url': args.provider_url,
		'target_attachments': args.target_attachments,
		'target_content': args.target_content,
		'target_display_name': args.target_display_name,
		'target_downstream_duplicates': args.target_downstream_duplicates,
		'target_id': args.target_id,
		'target_image_height': args.target_image_height,
		'target_image_url': args.target_image_url,
		'target_image_width': args.target_image_width,
		'target_object_type': args.target_object_type,
		'target_published': args.target_published,
		'target_summary': args.target_summary,
		'target_updated': args.target_updated,
		'target_upstream_duplicates': args.target_upstream_duplicates,
		'target_url': args.target_url,
		'title': args.title,
		'updated': args.updated,
		'url': args.url,
		'verb': args.verb
	} );


*/
Buleys.stream.activity = function( args ) {
	console.log("CHECK 123 ACTOR IMAGE URL",args.actor_image_url);
	console.log("DUMP: " .JSON.stringify(args) );
	return AS.activity( {
		'actor': Buleys.stream.actor( {
			'attachments': args.actor_attachments,
			'content': args.actor_content,
			'display_name': args.actor_display_name,
			'downstream_duplicates': args.actor_upstream_duplicates,
			'id': args.actor_id,
			'image': AS.media( { 
				'height': args.actor_image_height,
				'url': args.actor_image_url,
				'width': args.actor_image_width
			} ),
			'object_type': args.actor_object_type,
			'published': args.actor_published,
			'summary': args.actor_summary,
			'updated': args.actor_updated,
			'upstream_duplicates': args.actor_upstream_duplicates,
			'url': args.actor_url
		} ),
		'content': args.content,
		'generator': Buleys.stream.provider( {
			'attachments': args.generator_attachments,
			'content': args.generator_content,
			'display_name': args.generator_display_name,
			'downstream_duplicates': args.generator_downstream_duplicates,
			'id': args.generator_id,
			'image': AS.media( { 
				'height': args.generator_image_height,
				'url': args.generator_image_url,
				'width': args.generator_image_width
			} ),
			'object_type': args.generator_object_type,
			'published': args.generator_published,
			'score': args.generator_score,//extension
			'summary': args.generator_summary,
			'updated': args.generator_updated,
			'upstream_duplicates': args.generator_upstream_duplicates,
			'url': args.generator_url
		} ),
		'icon': AS.media( {
			'height': args.icon_height,
			'url': args.icon_url,
			'width': args.icon_width
		} ),
		'id': args.id,
		'object': AS.object( { 
			'attachments': args.object_attachments,
			'content': args.object_content,
			'display_name': args.object_display_name,
			'downstream_duplicates': args.object_downstream_duplicates,
			'entities': args.object_entities,//extension
			'id': args.object_id,
			'image': AS.media( { 
				'height': args.object_image_height,
				'url': args.object_image_url,
				'width': args.object_image_width
			} ),
			'object_type': args.object_object_type,
			'published': args.object_published,
			'score': args.object_score, //extension
			'summary': args.object_summary,
			'updated': args.object_updated,
			'upstream_duplicates': args.object_upstream_duplicates,
			'url': args.object_url
		} ),
		'published': args.published,
		'provider': Buleys.stream.provider( {
			'attachments': args.provider_attachments,
			'content': args.provider_content,
			'display_name': args.provider_display_name,
			'downstream_duplicates': args.provider_downstream_duplicates,
			'id': args.provider_id,
			'image': AS.media( { 
				'height': args.provider_image_height,
				'url': args.provider_image_url,
				'width': args.provider_image_width
			} ),
			'object_type': args.provider_object_type,
			'published': args.provider_published,
			'score': args.provider_score,//extension
			'summary': args.provider_summary,
			'updated': args.provider_updated,
			'upstream_duplicates': args.provider_upstream_duplicates,
			'url': args.provider_url
		} ),
		'target': Buleys.stream.target( {
			'attachments': args.target_attachments,
			'content': args.target_content,
			'display_name': args.target_display_name,
			'downstream_duplicates': args.target_downstream_duplicates,
			'id': args.target_id,
			'image': AS.media( { 
				'height': args.target_image_height,
				'url': args.target_image_url,
				'width': args.target_image_width
			} ),
			'object_type': args.target_object_type,
			'published': args.target_published,
			'summary': args.target_summary,
			'updated': args.target_updated,
			'upstream_duplicates': args.target_upstream_duplicates,
			'url': args.target_url
		} ),
		'title': args.title,
		'updated': args.updated,
		'url': args.url,
		'verb': args.verb		
	} );

}

Buleys.stream.actor = function( args, request ) {

	var result = AS.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': AS.media( { 
			'height': args.image_height,
			'url': args.image_url,
			'width': args.image_width
		} ),
		'object_type': args.object_type,
		'published': args.published,
		'summary': args.summary,
		'updated': args.updated,
		'upstream_duplicates': args.upstream_duplicates,
		'url': args.url
	} );

	if( !!request ) {
		request.actor = result;
	} else {
		return result;
	}

};

Buleys.stream.author = function( args, request ) {

	var result = AS.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': AS.media( { 
			'height': args.image_height,
			'url': args.image_url,
			'width': args.image_width
		} ),
		'object_type': args.object_type,
		'published': args.published,
		'summary': args.summary,
		'updated': args.updated,
		'upstream_duplicates': args.upstream_duplicates,
		'url': args.url
	} );

	if( !!request ) {
		request.author = result;
	} else {
		return result;
	}

};

Buleys.stream.generator = function( args, request ) {

	var result = AS.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': AS.media( { 
			'height': args.image_height,
			'url': args.image_url,
			'width': args.image_width
		} ),
		'object_type': args.object_type,
		'published': args.published,
		'summary': args.summary,
		'updated': args.updated,
		'upstream_duplicates': args.upstream_duplicates,
		'url': args.url
	} );

	if( !!request ) {
		request.generator = result;
	} else {
		return result;
	}

};

Buleys.stream.provider = function( args, request ) {

	var result = AS.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': AS.media( { 
			'height': args.image_height,
			'url': args.image_url,
			'width': args.image_width
		} ),
		'object_type': args.object_type,
		'published': args.published,
		'summary': args.summary,
		'updated': args.updated,
		'upstream_duplicates': args.upstream_duplicates,
		'url': args.url
	} );

	if( !!request ) {
		request.provider = result;
	} else {
		return result;
	}

};

Buleys.stream.target = function( args, request ) {

	var result = AS.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': AS.media( { 
			'height': args.image_height,
			'url': args.image_url,
			'width': args.image_width
		} ),
		'object_type': args.object_type,
		'published': args.published,
		'summary': args.summary,
		'updated': args.updated,
		'upstream_duplicates': args.upstream_duplicates,
		'id': args.id,
		'url': args.url
	} );

	if( !!request ) {
		request.target = result;
	} else {
		return result;
	}

};

Buleys.stream.image = function( args, request ) {

	//TODO: validation
		
	var result = AS.media( { 
		'height': args.height,
		'width': args.width,
		'url': args.url
	} );

	if( !!request ) {
		return request[ 'image' ] = result;
	} else {
		return result;
	}
	
}

Buleys.stream.video = function( args ) {

	//TODO: validation
		
	var result = AS.media( { 
		'duration': args.duration,
		'height': args.height,
		'width': args.width,
		'url': args.url
	} );

	if( !!request ) {
		return request[ 'video' ] = result;
	} else {
		return result;
	}
	
}


AS.activity = function( args ) {

	var result = {};

	//TODO: All the validation

	if( !!args.actor ) {
		result.actor = args.actor; //object
	}

	if( !!args.content ) {
		result.content = args.content; //string
	}

	if( !!args.generator ) {
		result.generator = args.generator; //Object
	}

	if( !!args.icon ) {
		result.icon = args.icon; //Media Link
	}

	if( !!args.id ) {
		result.id = args.id; //string
	}

	if( !!args.object ) {
		result.object = args.object; //Object
	}

	if( !!args.provider ){
		result.provider = args.provider;
	}

	if( !!args.published ) {
		result.published = args.published; //date-time
	}

	if( !!args.provider ){
		result.provider = args.provider; //Object
	}

	if( !!args.target ){
		result.target = args.target; //Object
	}

	if( !!args.title ){
		result.title = args.title;
	}

	if( !!args.updated ) {
		result.updated = args.updated;
	}

	if( !!args.url ) {
		result.url = args.url;
	}

	if( !!args.verb ) {
		result.verb = args.verb;
	}

	return result;

};

AS.media = function( args, request ) {

	var result = {};

	//TODO: All the validation

	if( !!args.duration ) {
		result.duration = args.duration; //int
	}


	if( !!args.height ) {
		result.height = args.height; //int
	}


	if( !!args.url ) {
		result.url = args.url; //string
	}

	//int
	if( !!args.width ) {
		result.width = args.width;
	}

	if( !!request ) {
		return request.media = result;
	} else { 
		return result;
	}

}

AS.object = function( args, request ) {

	var result = {};

	//TODO: All the validation

	if( !!args.attachments ) {
		result.attachments = args.attachments;
	}

	if( !!args.author ) {
		result.author = args.author;
	}

	if( !!args.content ) {
		result.content = args.content;
	}

	if( !!args.display_name ) {
		result.displayName = args.display_name;
	}

	if( !!args.downstream_duplicates ) {
		result.downstreamDuplicates = args.downstream_duplicates;
	}

	if( !!args.id ) {
		result.id = args.id;
	}

	if( !!args.image ) {
		result.image = args.image;
	}

	if( !!args.object_type ) {
		result.objectType = args.object_type;
	}

	if( !!args.published ) {
		result.published = args.published;
	}

	if( !!args.summary ) {
		result.summary = args.summary;
	}

	if( !!args.updated ) {
		result.updated = args.updated;
	}

	if( !!args.upstream_duplicates ) {
		result.upstream_duplicates = args.upstream_duplicates;
	}

	if( !!args.url ) {
		result.url = args.url;
	}

	if( !!request ) {
		return request.object = result;
	} else { 
		return result;
	}

};

AS.getCollection = function( args, request ) {

	var result = {};

	//TODO: All the validation

	if( !!args.total_items ) {
		result.totalItems = args.total_items; //int
	}


	if( !!args.items ) {
		result.items = args.items; //array of objects
	}


	if( !!args.url ) {
		result.url = args.url; //string
	}

	return result;

}


AS.getTarget = function( id, object_type, display_name, url, image_url, image_width, image_height ) {

	var result = {};

	if( !!url ) {
		result.url = url;
	}


	if( !!id ) {
		result.id = id;
	}


	if( !!object_type ) {
		result.object_type = object_type;
	}


	if( !!display_name ) {
		result.display_name = display_name;
	}

	if( !!image_url ) {
		    result.AS.getImage( image_url, image_width, image_height )
	}

	return { "target": result };

};
