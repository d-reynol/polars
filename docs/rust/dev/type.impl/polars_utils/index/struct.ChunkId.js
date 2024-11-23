(function() {var type_impls = {
"polars_utils":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChunkId%3CCHUNK_BITS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#205-239\">source</a><a href=\"#impl-ChunkId%3CCHUNK_BITS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const CHUNK_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; <a class=\"struct\" href=\"polars_utils/index/struct.ChunkId.html\" title=\"struct polars_utils::index::ChunkId\">ChunkId</a>&lt;CHUNK_BITS&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.null\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#207-209\">source</a><h4 class=\"code-header\">pub const fn <a href=\"polars_utils/index/struct.ChunkId.html#tymethod.null\" class=\"fn\">null</a>() -&gt; Self</h4></section><section id=\"method.is_null\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#212-214\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars_utils/index/struct.ChunkId.html#tymethod.is_null\" class=\"fn\">is_null</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.store\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#218-223\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars_utils/index/struct.ChunkId.html#tymethod.store\" class=\"fn\">store</a>(chunk: <a class=\"type\" href=\"polars_utils/index/type.IdxSize.html\" title=\"type polars_utils::index::IdxSize\">IdxSize</a>, row: <a class=\"type\" href=\"polars_utils/index/type.IdxSize.html\" title=\"type polars_utils::index::IdxSize\">IdxSize</a>) -&gt; Self</h4></section><section id=\"method.extract\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#227-233\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars_utils/index/struct.ChunkId.html#tymethod.extract\" class=\"fn\">extract</a>(self) -&gt; (<a class=\"type\" href=\"polars_utils/index/type.IdxSize.html\" title=\"type polars_utils::index::IdxSize\">IdxSize</a>, <a class=\"type\" href=\"polars_utils/index/type.IdxSize.html\" title=\"type polars_utils::index::IdxSize\">IdxSize</a>)</h4></section><section id=\"method.inner_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#236-238\">source</a><h4 class=\"code-header\">pub fn <a href=\"polars_utils/index/struct.ChunkId.html#tymethod.inner_mut\" class=\"fn\">inner_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></div></details>",0,"polars_utils::index::NullableChunkId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ChunkId%3CCHUNK_BITS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#186\">source</a><a href=\"#impl-Clone-for-ChunkId%3CCHUNK_BITS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const CHUNK_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polars_utils/index/struct.ChunkId.html\" title=\"struct polars_utils::index::ChunkId\">ChunkId</a>&lt;CHUNK_BITS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#186\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polars_utils/index/struct.ChunkId.html\" title=\"struct polars_utils::index::ChunkId\">ChunkId</a>&lt;CHUNK_BITS&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polars_utils::index::NullableChunkId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ChunkId\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#194-203\">source</a><a href=\"#impl-Debug-for-ChunkId\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polars_utils/index/struct.ChunkId.html\" title=\"struct polars_utils::index::ChunkId\">ChunkId</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#195-202\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polars_utils::index::NullableChunkId"],["<section id=\"impl-Copy-for-ChunkId%3CCHUNK_BITS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_utils/index.rs.html#186\">source</a><a href=\"#impl-Copy-for-ChunkId%3CCHUNK_BITS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const CHUNK_BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"polars_utils/index/struct.ChunkId.html\" title=\"struct polars_utils::index::ChunkId\">ChunkId</a>&lt;CHUNK_BITS&gt;</h3></section>","Copy","polars_utils::index::NullableChunkId"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()