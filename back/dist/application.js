"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloPlatformApplication = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const datasources_1 = require("./datasources");
const user_repository_1 = require("./repositories/user.repository");
const sequence_1 = require("./sequence");
const services_1 = require("./services");
class HelloPlatformApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        // ------ ADD SNIPPET AT THE BOTTOM ---------
        // Mount authentication system
        this.component(authentication_1.AuthenticationComponent);
        // Mount jwt component
        this.component(authentication_jwt_1.JWTAuthenticationComponent);
        // Bind datasource
        this.dataSource(datasources_1.DbDataSource, authentication_jwt_1.UserServiceBindings.DATASOURCE_NAME);
        // Bind user service
        this.bind(authentication_jwt_1.UserServiceBindings.USER_SERVICE).toClass(services_1.UserService);
        // Bind user and credentials repository
        this.bind(authentication_jwt_1.UserServiceBindings.USER_REPOSITORY).toClass(user_repository_1.UserRepository);
        this.bind(authentication_jwt_1.UserServiceBindings.USER_CREDENTIALS_REPOSITORY).toClass(authentication_jwt_1.UserCredentialsRepository);
        // ------------- END OF SNIPPET -------------
        //new
        this.bind(authentication_jwt_1.UserServiceBindings.USER_SERVICE).toClass(authentication_jwt_1.MyUserService);
    }
}
exports.HelloPlatformApplication = HelloPlatformApplication;
//# sourceMappingURL=application.js.map