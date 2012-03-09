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
		request.media = result;
		return request;
	} else { 
		return result;
	}

};


Private.object = function( args, request ) {

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
		request.object = result;
		return request;
	} else { 
		return result;
	}

};


Private.getCollection = function( args, request ) {

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

};


Private.getTarget = function( id, object_type, display_name, url, image_url, image_width, image_height ) {

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
		result.image = Private.getImage( image_url, image_width, image_height )
	}

	return { "target": result };

};

/* Public */

var Public = function() {

};

Public.prototype.activity = function( args ) {
	var result = Private.activity( {
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

/* API */

module.exports = new Public();

