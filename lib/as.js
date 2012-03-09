/* node-as */

var Private = {};

Private.genericEvent = function( object, verb, published, generator, id ) {

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
	
	if( true === id ) {
		result.id = crypto.createHash('md5').update( result ).digest("hex");
	} else {
		if( !!id ) {
			result.id = id;
		} 
	}

	return result;

};

Private.actor = function( args, request ) {

	var result = Private.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': Private.media( { 
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

Private.target = function( args, request ) {

	var result = Private.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': Private.media( { 
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
		return request;
	} else {
		return result;
	}

};

Private.generator = function( args, request ) {

	var result = Private.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': Private.media( { 
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
		return request;
	} else {
		return result;
	}

};

Private.provider = function( args, request ) {

	var result = Private.object( {
		'attachments': args.attachments,
		'content': args.content,
		'display_name': args.display_name,
		'downstream_duplicates': args.downstream_duplicates,
		'id': args.id,
		'image': Private.media( { 
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
		return request;
	} else {
		return result;
	}

};

Private.activity = function( args ) {

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

Private.media = function( args, request ) {
	
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
		console.log("11111111111111111");
		request.media = result;
		return request;
	} else { 
		console.log("222222222222222",result);
		return result;
	}

};


Private.object = function( args, request ) {

	var result = {};

	//TODO: All the validation

	if( !!args.attachments ) {
		result.attachments = args.attachments; //array of objects
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
		request.object = result;
		return request;
	} else { 
		return result;
	}

};


Private.collection = function( args, request ) {

	var result = {};

	//TODO: All the validation
	//http://activitystrea.ms/specs/json/1.0/

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

};


/* Public */

var Public = function() {

};

Public.prototype.activity = function( args ) {
console.log( "TEST: " + JSON.stringify( { 'image': Private.media( {
	                                'height': args.actor_image_height,
	                                'url': args.actor_image_url,
	                                'width': args.actor_image_width
	                        } ) ) );
	return Private.activity( {
		'actor': Private.actor( {
			'attachments': args.actor_attachments,
			'content': args.actor_content,
			'display_name': args.actor_display_name,
			'downstream_duplicates': args.actor_upstream_duplicates,
			'id': args.actor_id,
			'image': Private.media( { 
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
		'generator': Private.provider( {
			'attachments': args.generator_attachments,
			'content': args.generator_content,
			'display_name': args.generator_display_name,
			'downstream_duplicates': args.generator_downstream_duplicates,
			'id': args.generator_id,
			'image': Private.media( { 
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
		'icon': Private.media( {
			'height': args.icon_height,
			'url': args.icon_url,
			'width': args.icon_width
		} ),
		'id': args.id,
		'object': Private.object( { 
			'attachments': args.object_attachments,
			'content': args.object_content,
			'display_name': args.object_display_name,
			'downstream_duplicates': args.object_downstream_duplicates,
			'entities': args.object_entities,//extension
			'id': args.object_id,
			'image': Private.media( { 
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
		'provider': Private.provider( {
			'attachments': args.provider_attachments,
			'content': args.provider_content,
			'display_name': args.provider_display_name,
			'downstream_duplicates': args.provider_downstream_duplicates,
			'id': args.provider_id,
			'image': Private.media( { 
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
		'target': Private.target( {
			'attachments': args.target_attachments,
			'content': args.target_content,
			'display_name': args.target_display_name,
			'downstream_duplicates': args.target_downstream_duplicates,
			'id': args.target_id,
			'image': Private.media( { 
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

};

/* API */

module.exports = new Public();
