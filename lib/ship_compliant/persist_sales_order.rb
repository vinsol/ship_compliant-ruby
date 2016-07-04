module ShipCompliant
  class PersistSalesOrder

    def self.of_sales_order(data, configuration: :sale_order_service_configuration)
      camel_cased_keys = data.deep_transform_keys { |key| key.to_s.camelize }
      result = ShipCompliant.client(configuration: configuration).call(:persist_sales_order, camel_cased_keys)
      CheckComplianceResult.new(result)
    end

  end
end
