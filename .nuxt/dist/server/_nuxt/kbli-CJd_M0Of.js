import { defineComponent, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, computed, toValue, onServerPrefetch, ref, toRef, nextTick, unref, reactive, watch, withAsyncContext, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/hookable/dist/index.mjs";
import { u as useHead, _ as _export_sfc } from "./_plugin-vue_export-helper-Dn0XNCNu.js";
import { hash } from "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/ohash/dist/index.mjs";
import { isPlainObject } from "@vue/shared";
import { a as useNuxtApp, d as asyncDataDefaults, e as createError, f as fetchDefaults } from "../server.mjs";
import { debounce } from "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/perfect-debounce/dist/index.mjs";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/klona/dist/index.mjs";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/unctx/dist/index.mjs";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/radix3/dist/index.mjs";
import "C:/Users/FELIX/WebstormProjects/ruangoffice-new/node_modules/ufo/dist/index.mjs";
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
  if (!nuxtApp._asyncData[key.value]?._init) {
    initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
    nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
  }
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const initialFetch = () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    execute: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    clear: () => clearNuxtDataByKey(nuxtApp, key.value)
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = !import.meta.prerender || !nuxtApp.ssrContext?._sharedPrerenderCache ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(() => _handler(nuxtApp)));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
        nuxtApp._asyncDataPromises[key].cancelled = true;
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      asyncData.status.value = "pending";
      const promise = new Promise(
        (resolve, reject) => {
          try {
            resolve(handler(nuxtApp));
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        if (promise.cancelled) {
          return;
        }
        {
          asyncData.pending.value = false;
        }
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  let controller;
  const asyncData = useAsyncData(watchSources === false ? key.value : key, () => {
    controller?.abort?.(new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "kbli",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "KBLI — RuangOffice",
      meta: [
        { name: "description", content: "Cari dan filter daftar KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) berdasarkan kode, judul, dan uraian." }
      ]
    });
    const SECTION_MAP = [
      { range: [1, 3], section: "A", label: "Pertanian, Kehutanan, dan Perikanan" },
      { range: [5, 9], section: "B", label: "Pertambangan dan Penggalian" },
      { range: [10, 33], section: "C", label: "Industri Pengolahan" },
      { range: [35, 35], section: "D", label: "Pengadaan Listrik, Gas, Uap/ Air Panas" },
      { range: [36, 39], section: "E", label: "Pengadaan Air, Pengelolaan Sampah & Daur Ulang" },
      { range: [41, 43], section: "F", label: "Konstruksi" },
      { range: [45, 47], section: "G", label: "Perdagangan Besar dan Eceran; Reparasi Mobil & Motor" },
      { range: [49, 53], section: "H", label: "Pengangkutan dan Pergudangan" },
      { range: [55, 56], section: "I", label: "Penyediaan Akomodasi dan Makan Minum" },
      { range: [58, 63], section: "J", label: "Informasi dan Komunikasi" },
      { range: [64, 66], section: "K", label: "Jasa Keuangan dan Asuransi" },
      { range: [68, 68], section: "L", label: "Real Estat" },
      { range: [69, 75], section: "M", label: "Jasa Profesional, Ilmiah dan Teknis" },
      { range: [77, 82], section: "N", label: "Jasa Persewaan, Ketenagakerjaan, Agen Perjalanan, dan Penunjang Usaha" },
      { range: [84, 84], section: "O", label: "Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib" },
      { range: [85, 85], section: "P", label: "Pendidikan" },
      { range: [86, 88], section: "Q", label: "Jasa Kesehatan dan Kegiatan Sosial" },
      { range: [90, 93], section: "R", label: "Kesenian, Hiburan dan Rekreasi" },
      { range: [94, 96], section: "S", label: "Kegiatan Jasa Lainnya" },
      { range: [97, 98], section: "T", label: "Kegiatan Rumah Tangga Sebagai Pemberi Kerja" },
      { range: [99, 99], section: "U", label: "Kegiatan Badan Internasional dan Ekstra Internasional" }
    ];
    function getSection(code) {
      if (!code) return "";
      const two = Number(code.slice(0, 2));
      for (const m of SECTION_MAP) {
        const [start, end] = m.range;
        if (two >= start && two <= end) return m.section;
      }
      return "";
    }
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/kbli.json", { default: () => [] }, "$7pMnYGEpOw")), __temp = await __temp, __restore(), __temp);
    const search = ref("");
    const category = ref("");
    const categoryOptions = computed(() => SECTION_MAP.map((m) => ({ value: m.section, label: m.label })));
    const items = computed(() => {
      const arr = (data.value || []).map((it) => ({
        code: it.code,
        title: it.title,
        description: it.description,
        section: getSection(String(it.code || ""))
      }));
      return arr;
    });
    const normalized = (s) => (s || "").toLowerCase();
    const filteredItems = computed(() => {
      const q = normalized(search.value);
      const cat = category.value;
      return items.value.filter((it) => {
        if (cat && it.section !== cat) return false;
        if (!q) return true;
        return normalized(it.code).includes(q) || normalized(it.title).includes(q) || normalized(it.description).includes(q);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-4aedb333><div class="container my-4" data-v-4aedb333><div class="row g-3 align-items-end" data-v-4aedb333><div class="col-12" data-v-4aedb333><h1 class="h3 mb-0" data-v-4aedb333>Daftar KBLI</h1><p class="text-muted mb-0" data-v-4aedb333>Pencarian dan filter Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)</p></div><div class="col-12 col-md-8" data-v-4aedb333><label for="kbliSearch" class="form-label" data-v-4aedb333>Cari</label><div class="input-group" data-v-4aedb333><span class="input-group-text" data-v-4aedb333><i class="fas fa-search" data-v-4aedb333></i></span><input id="kbliSearch"${ssrRenderAttr("value", search.value)} type="text" class="form-control" placeholder="Cari kode, judul, atau uraian KBLI..." data-v-4aedb333></div></div><div class="col-12 col-md-4" data-v-4aedb333><label for="kbliCat" class="form-label" data-v-4aedb333>Kategori</label><select id="kbliCat" class="form-select" data-v-4aedb333><option value="" data-v-4aedb333${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "") : ssrLooseEqual(category.value, "")) ? " selected" : ""}>Semua KBLI</option><!--[-->`);
      ssrRenderList(categoryOptions.value, (opt) => {
        _push(`<option${ssrRenderAttr("value", opt.value)} data-v-4aedb333${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, opt.value) : ssrLooseEqual(category.value, opt.value)) ? " selected" : ""}>${ssrInterpolate(opt.value)} — ${ssrInterpolate(opt.label)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="d-flex justify-content-between align-items-center mt-3" data-v-4aedb333><small class="text-muted" data-v-4aedb333>Menampilkan ${ssrInterpolate(_ctx.displayStart.toLocaleString("id-ID"))}–${ssrInterpolate(_ctx.displayEnd.toLocaleString("id-ID"))} dari ${ssrInterpolate(_ctx.totalItems.toLocaleString("id-ID"))} KBLI</small>`);
      if (unref(pending)) {
        _push(`<div class="text-warning" data-v-4aedb333><i class="fa-solid fa-circle-notch fa-spin" data-v-4aedb333></i> Memuat data…</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(error)) {
        _push(`<div class="alert alert-danger mt-3" data-v-4aedb333> Terjadi kesalahan saat memuat data KBLI. Silakan coba lagi. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(pending) && !unref(error)) {
        _push(`<div class="mt-3" data-v-4aedb333>`);
        if (filteredItems.value.length === 0) {
          _push(`<div class="alert alert-warning" data-v-4aedb333> Tidak ada hasil yang cocok. </div>`);
        } else {
          _push(`<div class="list-group" data-v-4aedb333><!--[-->`);
          ssrRenderList(filteredItems.value, (it) => {
            _push(`<article class="list-group-item list-group-item-action" data-v-4aedb333><div class="d-flex w-100 justify-content-between align-items-start" data-v-4aedb333><h2 class="h6 mb-1" data-v-4aedb333><span class="badge bg-primary me-2 fw-bold" data-v-4aedb333>${ssrInterpolate(it.code)}</span> ${ssrInterpolate(it.title)}</h2>`);
            if (it.section) {
              _push(`<span class="badge bg-dark-subtle text-dark" data-v-4aedb333>${ssrInterpolate(it.section)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><p class="mb-0 text-muted" style="${ssrRenderStyle({ "white-space": "pre-line" })}" data-v-4aedb333>${ssrInterpolate(it.description)}</p></article>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kbli.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kbli = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4aedb333"]]);
export {
  kbli as default
};
//# sourceMappingURL=kbli-CJd_M0Of.js.map
