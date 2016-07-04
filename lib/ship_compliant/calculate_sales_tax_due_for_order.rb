module ShipCompliant
  class CalculateSalesTaxDueForOrder
    def self.order(details, options: {}, configuration: :tax_service_configuration)

      result = calculate_sales_tax_due_for_order(details, configuration: configuration)
      CalculateSalesTaxDueForOrderResult.new(result)
    end

    def self.line_item(details, options: {}, configuration: :tax_service_configuration)

      result = calculate_sales_tax_due_for_order(details, configuration: configuration)
      CalculateSalesTaxDueForOrderResult.new(result)
    end

    private

    def self.calculate_sales_tax_due_for_order(request, configuration:)
      ShipCompliant.client(configuration: configuration).call(:calculate_sales_tax_due_for_order, request)
    end

  end
end
