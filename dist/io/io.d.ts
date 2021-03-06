import './indexed_db';
import './local_storage';
import { browserFiles } from './browser_files';
import { browserHTTPRequest } from './browser_http';
import { concatenateArrayBuffers, decodeWeights, encodeWeights, getModelArtifactsInfoForJSON } from './io_utils';
import { fromMemory, withSaveHandler } from './passthrough';
import { IORouterRegistry } from './router_registry';
import { IOHandler, LoadHandler, ModelArtifacts, ModelStoreManager, SaveConfig, SaveHandler, SaveResult, WeightsManifestConfig, WeightsManifestEntry } from './types';
import { loadWeights } from './weights_loader';
declare const registerSaveRouter: typeof IORouterRegistry.registerSaveRouter;
declare const registerLoadRouter: typeof IORouterRegistry.registerLoadRouter;
declare const getSaveHandlers: typeof IORouterRegistry.getSaveHandlers;
declare const getLoadHandlers: typeof IORouterRegistry.getLoadHandlers;
export { copyModel, listModels, moveModel, removeModel } from './model_management';
export { browserFiles, browserHTTPRequest, concatenateArrayBuffers, decodeWeights, encodeWeights, fromMemory, getLoadHandlers, getModelArtifactsInfoForJSON, getSaveHandlers, IOHandler, LoadHandler, loadWeights, ModelArtifacts, ModelStoreManager, registerLoadRouter, registerSaveRouter, SaveConfig, SaveHandler, SaveResult, WeightsManifestConfig, WeightsManifestEntry, withSaveHandler };
