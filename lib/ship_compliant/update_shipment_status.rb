module ShipCompliant
  class UpdateShipmentStatus
    def self.by_shipment_and_order_key(data, configuration: :sale_order_service_configuration)
      camel_cased_keys = data.deep_transform_keys { |key| key.to_s.camelize }
      result = update_shipment_status(camel_cased_keys, configuration: configuration)
      UpdateShipmentStatusResult.new(result)
    end

    private

    def self.update_shipment_status(request, configuration:)
      ShipCompliant.client(configuration: configuration).call(:update_shipment_status, request)
    end

  end
end
