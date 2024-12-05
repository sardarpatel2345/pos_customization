from odoo import models, fields

class PosConfig(models.Model):
    _inherit = 'pos.config'

    iface_printbill = fields.Boolean(string="Enable Print Bill", default=False)
