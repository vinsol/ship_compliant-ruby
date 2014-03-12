var search_data = {"index":{"searchIndex":["shipcompliant","client","configuration","ordersearch","searchsalesordersummary","searchsalesorders","searchsalesordersresult","voidsalesorder","voidsalesorderresult","by_order_key()","client()","configure()","credentials()","error_code()","error_key()","error_message()","failure?()","find_by()","length()","new()","new()","order_key()","purchase_date()","remaining_orders_length()","sales_order_key()","shipment_summary()","success?()","summaries()","to_h()","readme"],"longSearchIndex":["shipcompliant","shipcompliant::client","shipcompliant::configuration","shipcompliant::ordersearch","shipcompliant::searchsalesordersummary","shipcompliant::searchsalesorders","shipcompliant::searchsalesordersresult","shipcompliant::voidsalesorder","shipcompliant::voidsalesorderresult","shipcompliant::voidsalesorder::by_order_key()","shipcompliant::client()","shipcompliant::configure()","shipcompliant::configuration#credentials()","shipcompliant::voidsalesorderresult#error_code()","shipcompliant::voidsalesorderresult#error_key()","shipcompliant::voidsalesorderresult#error_message()","shipcompliant::voidsalesorderresult#failure?()","shipcompliant::searchsalesorders::find_by()","shipcompliant::searchsalesordersresult#length()","shipcompliant::configuration::new()","shipcompliant::searchsalesordersresult::new()","shipcompliant::searchsalesordersummary#order_key()","shipcompliant::searchsalesordersummary#purchase_date()","shipcompliant::searchsalesordersresult#remaining_orders_length()","shipcompliant::searchsalesordersummary#sales_order_key()","shipcompliant::searchsalesordersummary#shipment_summary()","shipcompliant::voidsalesorderresult#success?()","shipcompliant::searchsalesordersresult#summaries()","shipcompliant::ordersearch#to_h()",""],"info":[["ShipCompliant","","classes/ShipCompliant.html","",""],["ShipCompliant::Client","","classes/ShipCompliant/Client.html","",""],["ShipCompliant::Configuration","","classes/ShipCompliant/Configuration.html","","<p>Stores runtime configuration to authenticate user.\n\n<pre><code>ShipCompliant.configure do |c|\n  c.partner_key = &#39;XXXX-XX-XXXXX&#39; ...\n</code></pre>\n"],["ShipCompliant::OrderSearch","","classes/ShipCompliant/OrderSearch.html","","<p>ShipCompliant::OrderSearch\n<p>Acts as a hash for adding search criteria to the\n<code>SearchSalesOrders</code> API endpoint. …\n"],["ShipCompliant::SearchSalesOrderSummary","","classes/ShipCompliant/SearchSalesOrderSummary.html","","<p>ShipCompliant::SearchSalesOrderSummary\n<p>Wraps the <code>SalesOrderSummary</code> hash with a simple DSL to provide\neasy …\n"],["ShipCompliant::SearchSalesOrders","","classes/ShipCompliant/SearchSalesOrders.html","","<p>ShipCompliant::SearchSalesOrders\n<p>Search orders in the ShipCompliant database on a number of different …\n"],["ShipCompliant::SearchSalesOrdersResult","","classes/ShipCompliant/SearchSalesOrdersResult.html","","<p>An API wrapper for <code>SearchSalesOrders</code> response.\n<p>Converts fields into integers and ensures <code>order_summaries</code> …\n"],["ShipCompliant::VoidSalesOrder","","classes/ShipCompliant/VoidSalesOrder.html","","<p>ShipCompliant::VoidSalesOrder\n<p>This method takes in a sales order key and voids all shipments in an\nexisting …\n"],["ShipCompliant::VoidSalesOrderResult","","classes/ShipCompliant/VoidSalesOrderResult.html","","<p>ShipCompliant::VoidSalesOrderResult\n<p>This class provides methods to easily get the result of voiding a …\n"],["by_order_key","ShipCompliant::VoidSalesOrder","classes/ShipCompliant/VoidSalesOrder.html#method-c-by_order_key","(order_key)","<p>Takes an sales order key and makes a request to void it in the system.\n<p>Returns an instance of ShipCompliant::VoidSalesOrderResult …\n"],["client","ShipCompliant","classes/ShipCompliant.html#method-c-client","()","<p>Returns an instance of <code>Client</code>.\n"],["configure","ShipCompliant","classes/ShipCompliant.html#method-c-configure","()",""],["credentials","ShipCompliant::Configuration","classes/ShipCompliant/Configuration.html#method-i-credentials","()","<p>Returns a <code>Hash</code> for authenticating each API request.\n\n<pre><code>{\n  &#39;PartnerKey&#39; =&gt; &#39;XXXX-XX-XXXXX&#39;,\n  &#39;Username&#39; ...\n</code></pre>\n"],["error_code","ShipCompliant::VoidSalesOrderResult","classes/ShipCompliant/VoidSalesOrderResult.html#method-i-error_code","()","<p>Gets the error code from the request.\n<p>Returns <code>0</code> when empty.\n\n<pre><code>puts &quot;ERROR ##{result.error_code}&quot; unless result.success?</code></pre>\n"],["error_key","ShipCompliant::VoidSalesOrderResult","classes/ShipCompliant/VoidSalesOrderResult.html#method-i-error_key","()","<p>Gets the key that failed.\n<p>Returns <code>nil</code> when empty.\n\n<pre><code>puts &quot;OrderKey: #{result.error_key}&quot; unless result.success?</code></pre>\n"],["error_message","ShipCompliant::VoidSalesOrderResult","classes/ShipCompliant/VoidSalesOrderResult.html#method-i-error_message","()","<p>Gets the error message from the request.\n<p>Returns <code>nil</code> when empty.\n\n<pre><code>puts &quot;ERROR: #{result.error_message}&quot; ...</code></pre>\n"],["failure?","ShipCompliant::VoidSalesOrderResult","classes/ShipCompliant/VoidSalesOrderResult.html#method-i-failure-3F","()","<p>Returns true if order failed to be voided.\n\n<pre><code>puts &quot;FAILED&quot; if result.failure?</code></pre>\n"],["find_by","ShipCompliant::SearchSalesOrders","classes/ShipCompliant/SearchSalesOrders.html#method-c-find_by","(query)","<p><code>query</code> must be a Hash with the keys relating to each search\ncriteria.\n<p>To see a list of available keys take …\n"],["length","ShipCompliant::SearchSalesOrdersResult","classes/ShipCompliant/SearchSalesOrdersResult.html#method-i-length","()","<p>The number of orders returned the current response.\n"],["new","ShipCompliant::Configuration","classes/ShipCompliant/Configuration.html#method-c-new","()",""],["new","ShipCompliant::SearchSalesOrdersResult","classes/ShipCompliant/SearchSalesOrdersResult.html#method-c-new","(data)",""],["order_key","ShipCompliant::SearchSalesOrderSummary","classes/ShipCompliant/SearchSalesOrderSummary.html#method-i-order_key","()","<p>Returns the <code>sales_order_key</code>\n"],["purchase_date","ShipCompliant::SearchSalesOrderSummary","classes/ShipCompliant/SearchSalesOrderSummary.html#method-i-purchase_date","()","<p>Returns a <code>DateTime</code> from the order <code>purchase_date</code>\n"],["remaining_orders_length","ShipCompliant::SearchSalesOrdersResult","classes/ShipCompliant/SearchSalesOrdersResult.html#method-i-remaining_orders_length","()","<p>The number of orders waiting to be returned. Use this for paging results.\n"],["sales_order_key","ShipCompliant::SearchSalesOrderSummary","classes/ShipCompliant/SearchSalesOrderSummary.html#method-i-sales_order_key","()",""],["shipment_summary","ShipCompliant::SearchSalesOrderSummary","classes/ShipCompliant/SearchSalesOrderSummary.html#method-i-shipment_summary","()","<p>Returns the parsed hash from the <code>ShipmentSummary</code> element.\n\n<pre><code>{\n  compliance: &#39;ValueHere&#39;,\n  requested_ship_date: ...</code></pre>\n"],["success?","ShipCompliant::VoidSalesOrderResult","classes/ShipCompliant/VoidSalesOrderResult.html#method-i-success-3F","()","<p>Returns boolean whether order was successfully voided.\n\n<pre><code>puts &quot;SUCCESS&quot; if result.success?</code></pre>\n"],["summaries","ShipCompliant::SearchSalesOrdersResult","classes/ShipCompliant/SearchSalesOrdersResult.html#method-i-summaries","()","<p>Returns an array of ShipCompliant::SearchSalesOrderSummary. Use this to get\ninformation about each order. …\n"],["to_h","ShipCompliant::OrderSearch","classes/ShipCompliant/OrderSearch.html#method-i-to_h","()","<p>Converts hash keys to Pascal case and rejects invalid keys.\n\n<pre><code>:sales_order_keys #=&gt; &#39;SalesOrderKeys&#39;\n</code></pre>\n"],["README","","files/README_md.html","","<p>ShipCompliant - Ruby API Client\n<p>The ShipCompliant gem is a API Client for the SOAP API provided\nby\nShipCompliant ...\n"]]}}