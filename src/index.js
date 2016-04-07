import Builder from './Eloquent/Builder';
import Container from './Container';
import Model from './Eloquent/Model';
import RestConnection from './Connection/RestConnection';

/**
 * Define or retrieve a model definition.
 *
 * @param {string} name
 * @param {Object|function(base: Model): Model|undefined} [definition]
 *
 * The definition can be either an object of properties
 * to merge into the class, or a callback that receives
 * the base class and returns an extended class definition.
 * Or, omit this argument to fetch the named model.
 *
 * @example
 * // Define an Eloquent model with an object that
 * // extends the base Model definition.
 * Eloquent('Post', {
 *   endpoint: 'api/posts'
 * });
 *
 * // Define an Eloquent model with a callback
 * Eloquent('Post', function (modelDefinition) {
 *   modelDefinition.endpoint = 'api/posts';
 *   return modelDefinition;
 * });
 *
 * // Fetch a previously defined model
 * let Post = Eloquent('Post');
 *
 * // or
 * let Post = Eloquent.Post;
 *
 * // It's (mostly) the same API as Laravel's Eloquent
 * // so you already know how to query the posts table...
 * Post.whereNotNull('published')
 *     .orderBy('published')
 *     .get()
 *     .then(function (results) {
 *         console.log(results);
 *     });
 *
 * // ... or save a new record
 * Post.create({
 *   author: 'Derek',
 *   body: 'Hello!'
 * });
 */
const Eloquent = function(name, definition) {

    if ( ! Eloquent.booted) {
        Eloquent.boot();
    }

    if (definition) {
        Object.defineProperty(Eloquent, name, {
            get: function () {
                return Eloquent.make(name);
            }
        });

        return Eloquent.register(name, definition);
    }

    return Eloquent.make(name);
};

/**
 * Boot our Eloquent implementation.
 *
 * @returns {void}
 */
Eloquent.boot = function() {
    const container = new Container(Model);

    Eloquent.register = function (modelName, modelOptions, andMake) {
        return container.register(modelName, modelOptions, andMake);
    };

    Eloquent.make = function (modelName) {
        return container.make(modelName);
    };

    Eloquent.booted = true;
};

/*
 * Exports
 */
Eloquent.Builder = Builder;
Eloquent.Container = Container;
Eloquent.Model = Model;
Eloquent.RestConnection = RestConnection;

export default Eloquent;
