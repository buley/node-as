
var API = {},
  ActionStreams = {},
  transforms = {};

ActionStreams.genericEvent = function(object, verb, published, generator, id) {
var result;
result = {};
if (published) {
  result.published = published;
} else {
  result.published = new Date();
}
if (provider) {
  result.provider = provider;
}
if (generator) {
  result.generator = generator;
}
if (object) {
  result.object = object;
}
if (verb) {
  result.verb = verb;
}
if (true === id) {
  result.id = crypto.createHash("md5").update(result).digest("hex");
} else {
  if (id) {
    result.id = id;
  }
}
return result;
};

ActionStreams.actor = function(args, request) {
var result;
result = ActionStreams.object({
  attachments: args.attachments,
  content: args.content,
  display_name: args.display_name,
  downstream_duplicates: args.downstream_duplicates,
  upstream_duplicates: args.upstream_duplicates,
  id: args.id,
  image: 'undefined' !== typeof args.image && (args.image != null) ? args.image : ActionStreams.media({
    height: args.image_height,
    url: args.image_url,
    width: args.image_width
  }),
  object_type: args.object_type,
  published: args.published,
  summary: args.summary,
  updated: args.updated,
  url: args.url
});
if (request) {
  return request.actor = result;
} else {
  return result;
}
};

ActionStreams.target = function(args, request) {

var result;
result = ActionStreams.object({
  attachments: args.attachments,
  content: args.content,
  actor: args.actor,
  display_name: args.display_name,
  downstream_duplicates: args.downstream_duplicates,
  upstream_duplicates: args.upstream_duplicates,
  id: args.id,
  image: 'undefined' !== typeof args.image && (args.image != null) ? args.image : ActionStreams.media({
    height: args.image_height,
    url: args.image_url,
    width: args.image_width
  }),
  object_type: args.object_type,
  published: args.published,
  summary: args.summary,
  updated: args.updated,
  url: args.url
});
if (request) {
  request.target = result;
  return request;
} else {
  return result;
}

};
ActionStreams.generator = function(args, request) {
var result;
result = ActionStreams.object({
  attachments: args.attachments,
  content: args.content,
  display_name: args.display_name,
  downstream_duplicates: args.downstream_duplicates,
  upstream_duplicates: args.upstream_duplicates,
  id: args.id,
  image: 'undefined' !== typeof args.image && (args.image != null) ? args.image : ActionStreams.media({
    height: args.image_height,
    url: args.image_url,
    width: args.image_width
  }),
  object_type: args.object_type,
  published: args.published,
  summary: args.summary,
  updated: args.updated,
  url: args.url
});
if (request) {
  request.generator = result;
  return request;
} else {
  return result;
}
};
ActionStreams.provider = function(args, request) {
var result;
result = ActionStreams.object({
  attachments: args.attachments,
  content: args.content,
  display_name: args.display_name,
  downstream_duplicates: args.downstream_duplicates,
  upstream_duplicates: args.upstream_duplicates,
  id: args.id,
  image: 'undefined' !== typeof args.image && (args.image != null) ? args.image : ActionStreams.media({
    height: args.image_height,
    url: args.image_url,
    width: args.image_width
  }),
  object_type: args.object_type,
  published: args.published,
  summary: args.summary,
  updated: args.updated,
  url: args.url
});
if (request) {
  request.provider = result;
  return request;
} else {
  return result;
}
};
ActionStreams.activity = function(args) {
var result;
result = {};
if (args.actor) {
  result.actor = args.actor;
}
if (args.content) {
  result.content = args.content;
}
if (args.generator) {
  result.generator = args.generator;
}
if (args.icon) {
  result.icon = args.icon;
}
if (args.id) {
  result.id = args.id;
}
if (args.object) {
  result.object = args.object;
}
if (args.published) {
  result.published = args.published;
}
if (args.provider) {
  result.provider = args.provider;
}
if (args.target) {
  result.target = args.target;
}
if (args.title) {
  result.title = args.title;
}
if (args.updated) {
  result.updated = args.updated;
}
if (args.url) {
  result.url = args.url;
}
if (args.verb) {
  result.verb = args.verb;
}
return result;
};
ActionStreams.media = function(args, request) {
var result;
result = {};
if (args.duration) {
  result.duration = args.duration;
}
if (args.height) {
  result.height = args.height;
}
if (args.url) {
  result.url = args.url;
}
if (args.width) {
  result.width = args.width;
}
if (request) {
  request.media = result;
  return request;
} else {
  return result;
}
};
ActionStreams.object = function(args, request) {
var result;
result = {};
if (args.attachments) {
  result.attachments = args.attachments;
}
if (args.author) {
  result.author = args.author;
}
if (args.content) {
  result.content = args.content;
}
if (args.display_name) {
  result.displayName = args.display_name;
}
if (args.downstream_duplicates) {
  result.downstreamDuplicates = args.downstream_duplicates;
}
if (args.id) {
  result.id = args.id;
}
if (args.image) {
  result.image = args.image;
}
if (args.object_type) {
  result.objectType = args.object_type;
}
if (args.published) {
  result.published = args.published;
}
if (args.summary) {
  result.summary = args.summary;
}
if (args.updated) {
  result.updated = args.updated;
}
if (args.upstream_duplicates) {
  result.upstreamDuplicates = args.upstream_duplicates;
}
if (args.url) {
  result.url = args.url;
}
if (args.width) {
  result.width = args.width;
}
if (args.height) {
  result.height = args.height;
}
if (request) {
  request.object = result;
  return request;
} else {
  return result;
}
};
ActionStreams.collection = function(args, request) {
var result;
result = {};
if (args.total_items) {
  result.totalItems = args.total_items;
}
if (args.items) {
  result.items = args.items;
}
if (args.url) {
  result.url = args.url;
}
return result;
};
API.register = function(service, transform) {
var _base;
if ((_base = transforms)[service] == null) {
  _base[service] = [];
}
return transforms[service].push(transform);
};
API.deregister = function(service, transform) {
var x, xform, _i, _len, _ref, _results;
_ref = transforms[service];
_results = [];
for (x = _i = 0, _len = _ref.length; _i < _len; x = ++_i) {
  xform = _ref[x];
  if (transform === xform) {
    _results.push(delete transforms[service][x]);
  } else {
    _results.push(void 0);
  }
}
return _results;
};
API.clear = function(service) {
return transforms[service] = [];
};
API.transform = function(data) {
var deferred, promise, promises = [], service, transform, _i, _len, _ref;
deferred = Q.defer();
promise = deferred.promise;
service = data.service;
if (data.data != null) {
  data = data.data;
}
if (data.response != null) {
  data = data.response;
}
if (data.data != null) {
  data = data.data;
}
if ((service != null) && (transforms[service] != null)) {
  _ref = transforms[service];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    transform = _ref[_i];
    promises.push( transform(data) );
  }
}
deferred.resolve(data);
return Q.all(promises);
};
API.activity = function(args) {
//TODO: attachments
var result = ActionStreams.activity({
  actor: ActionStreams.actor({
    attachments: args.actor_attachments,
    content: args.actor_content,
    display_name: args.actor_display_name,
    downstream_duplicates: args.actor_downstream_duplicates,
    upstream_duplicates: args.actor_upstream_duplicates,
    id: args.actor_id,
    image: 'undefined' !== typeof args.actor_image && (args.actor_image != null) ? args.actor_image : ActionStreams.media({
      height: args.actor_image_height,
      url: args.actor_image_url,
      width: args.actor_image_width
    }),
    object_type: args.actor_object_type,
    published: args.actor_published,
    summary: args.actor_summary,
    updated: args.actor_updated,
    url: args.actor_url
  }),
  content: args.content,
  generator: ActionStreams.provider({
    attachments: args.generator_attachments,
    content: args.generator_content,
    display_name: args.generator_display_name,
    downstream_duplicates: args.generator_downstream_duplicates,
    upstream_duplicates: args.generator_upstream_duplicates,
    id: args.generator_id,
    image: 'undefined' !== typeof args.generator_image && (args.generator_image != null) ? args.generator_image : ActionStreams.media({
      height: args.generator_image_height,
      url: args.generator_image_url,
      width: args.generator_image_width
    }),
    object_type: args.generator_object_type,
    published: args.generator_published,
    score: args.generator_score,
    summary: args.generator_summary,
    updated: args.generator_updated,
    url: args.generator_url
  }),
  icon: ActionStreams.media({
    height: args.icon_height,
    url: args.icon_url,
    width: args.icon_width
  }),
  id: args.id,
  object: ActionStreams.object({
    attachments: args.object_attachments,
    content: args.object_content,
    display_name: args.object_display_name,
    downstream_duplicates: args.object_downstream_duplicates,
    upstream_duplicates: args.object_upstream_duplicates,
    entities: args.object_entities,
    id: args.object_id,
    image: 'undefined' !== typeof args.object_image && (args.object_image != null) ? args.object_image : ActionStreams.media({
      height: args.object_image_height,
      url: args.object_image_url,
      width: args.object_image_width
    }),
    object_type: args.object_object_type,
    published: args.object_published,
    score: args.object_score,
    summary: args.object_summary,
    updated: args.object_updated,
    url: args.object_url,
    content: args.object_content,
    width: args.object_width,
    height: args.object_height
  }),
  published: args.published,
  provider: ActionStreams.provider({
    attachments: args.provider_attachments,
    content: args.provider_content,
    display_name: args.provider_display_name,
    downstream_duplicates: args.provider_downstream_duplicates,
    upstream_duplicates: args.provider_upstream_duplicates,
    id: args.provider_id,
    image: 'undefined' !== typeof args.provider_image && (args.provider_image != null) ? args.provider_image : ActionStreams.media({
      height: args.provider_image_height,
      url: args.provider_image_url,
      width: args.provider_image_width
    }),
    object_type: args.provider_object_type,
    published: args.provider_published,
    score: args.provider_score,
    summary: args.provider_summary,
    updated: args.provider_updated,
    url: args.provider_url
  }),
  target: ActionStreams.target({
    actor: ActionStreams.actor({
      attachments: args.target_actor_attachments,
      content: args.target_actor_content,
      display_name: args.target_actor_display_name,
      downstream_duplicates: args.target_actor_downstream_duplicates,
      upstream_duplicates: args.target_actor_upstream_duplicates,
      id: args.target_actor_id,
      image: 'undefined' !== typeof args.target_actor_image && (args.target_actor_image != null) ? args.target_actor_image : ActionStreams.media({
        height: args.target_actor_image_height,
        url: args.target_actor_image_url,
        width: args.target_actor_image_width
      }),
      object_type: args.target_actor_object_type,
      published: args.target_actor_published,
      summary: args.target_actor_summary,
      updated: args.target_actor_updated,
      url: args.target_actor_url
    }),
    object: ActionStreams.object({
      attachments: args.target_object_attachments,
      content: args.target_object_content,
      display_name: args.target_object_display_name,
      downstream_duplicates: args.target_object_downstream_duplicates,
      upstream_duplicates: args.target_object_upstream_duplicates,
      entities: args.target_object_entities,
      id: args.target_object_id,
      image: 'undefined' !== typeof args.target_object_image && (args.target_object_image != null) ? args.target_object_image : ActionStreams.media({
        height: args.target_object_image_height,
        url: args.target_object_image_url,
        width: args.target_object_image_width
      }),
      object_type: args.target_object_object_type,
      published: args.target_object_published,
      score: args.target_object_score,
      summary: args.target_object_summary,
      content: args.target_object_content,
      updated: args.target_object_updated,
      url: args.target_object_url,
      width: args.target_object_width,
      height: args.target_object_height
    }),
    attachments: args.target_attachments,
    content: args.target_content,
    display_name: args.target_display_name,
    downstream_duplicates: args.target_downstream_duplicates,
    upstream_duplicates: args.target_upstream_duplicates,
    id: args.target_id,
    image: 'undefined' !== typeof args.target_image && (args.target_image != null) ? args.target_image : ActionStreams.media({
      height: args.target_image_height,
      url: args.target_image_url,
      width: args.target_image_width
    }),
    object_type: args.target_object_type,
    published: args.target_published,
    summary: args.target_summary,
    updated: args.target_updated,
    url: args.target_url
  }),
  title: args.title,
  updated: args.updated,
  url: args.url,
  verb: args.verb
});
return result;
};

module.exports = API;