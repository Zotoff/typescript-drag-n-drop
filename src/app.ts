/// <reference path="./interfaces/drag-drop-interfaces.ts" />
/// <reference path="./state/project-state.ts" />
/// <reference path="./models/project-model.ts" />
/// <reference path="./utils/validation.ts" />
/// <reference path="./decorators/autobind-decorator.ts" />
/// <reference path="./component/base-component.ts" />
/// <reference path="./component/project-item.ts" />
/// <reference path="./component/project-input.ts" />
/// <reference path="./component/project-list.ts" />

namespace App {
    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
}
